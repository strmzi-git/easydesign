"use client";

import Button from "./Button";
import { useMediaQuery } from "react-responsive";
import Container from "./Container";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdExit } from "react-icons/io";
import { toast } from "react-hot-toast";
import {
  getAuth,
  onAuthStateChanged,
  UserInfo,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { addDoc, collection, query, where, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { db, firebaseConfig } from "../firebase";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
initializeApp(firebaseConfig);

interface HeaderProps {
  subPage?: boolean;
}

const Header = function ({ subPage }: HeaderProps) {
  const router = useRouter();
  const isMobile = useMediaQuery({ maxWidth: "560px" });
  const [theUser, setTheUser] = useState<UserInfo | null>();

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setTheUser(user.providerData[0]);
        const userEmail = user.email;
        const q = query(
          collection(db, "users"),
          where("email", "==", userEmail)
        );
        const querySnapshot = await getDocs(q);

        if (querySnapshot.docs.length === 0) {
          // Otherwise make user doc in firestoore
          const userData = {
            ...user.providerData[0],
            monthlyMembership: false,
            annualMembership: false,
          };
          const docRef = await addDoc(collection(db, "users"), userData);
        }
      } else {
        setTheUser(null);
      }
    });
  }, []);

  const handleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const res = await signInWithPopup(auth, provider);

      toast.success("Successfully signed in");
    } catch (err) {
      toast.error("There was an error signing you in... ");
    }
  };

  const handleSignOut = async () => {
    try {
      const res = await signOut(auth);
      toast.success("Successfully signed out");
    } catch (err) {
      console.log("There was an error signing out");
      toast.error("Sign out as unsuccessfull");
    }
  };

  const handleAnchorClick = (event: any) => {
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    const targetAnchor = document.querySelector(targetId);
    if (!targetAnchor) return;
    const originalTop = Math.floor(
      targetAnchor.getBoundingClientRect().top - 100
    );
    window.scroll({
      top: originalTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Container>
        <div className={"h-[75px] w-full  flex items-center justify-between"}>
          <Image
            src="/images/Logov5.png"
            alt="Easy Design logo"
            height={175}
            width={175}
          />

          <div className="w-[70%] flex items-center justify-end gap-6 text-primaryText">
            {isMobile ? (
              <RxHamburgerMenu size={25} />
            ) : (
              <>
                {!subPage ? (
                  <>
                    <a
                      href="#pricing"
                      onClick={handleAnchorClick}
                      className=" cursor-pointer "
                    >
                      Pricing
                    </a>
                    <a
                      href="#faq"
                      onClick={handleAnchorClick}
                      className=" cursor-pointer"
                    >
                      FAQ
                    </a>

                    <Button
                      primary
                      label="View collection"
                      functionality={() => {
                        router.push("/collection");
                      }}
                    />
                  </>
                ) : (
                  <>
                    {/* <Button
                      label={"Enjoy Premium"}
                      functionality={() => {
                        router.push("/#pricing");
                      }}
                    /> */}
                  </>
                )}

                {theUser ? (
                  <div className="w-auto px-2 h-[45px] border flex items-center relative justify-center gap-2 rounded-sm text-white">
                    <Image
                      src={theUser.photoURL || "/images/user_profile.png"}
                      alt="current users profile picture"
                      className="rounded-full"
                      width={25}
                      height={25}
                    />
                    <p className="text-primaryText">
                      {theUser.displayName || theUser.email}
                    </p>
                    <div
                      onClick={handleSignOut}
                      className="ml-4 cursor-pointer
                      text-primaryText"
                    >
                      <IoMdExit size={25} />
                    </div>
                  </div>
                ) : (
                  <Button
                    label={"Sign In"}
                    functionality={handleSignIn}
                    primary
                  />
                )}
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
