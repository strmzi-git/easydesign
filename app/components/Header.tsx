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
import { UserType } from "../types/UserType";
import { loadStripe } from "@stripe/stripe-js";
import Stripe from "stripe";
import axios from "axios";
initializeApp(firebaseConfig);

interface HeaderProps {
  subPage?: boolean;
}

const Header = function ({ subPage }: HeaderProps) {
  const router = useRouter();
  const isMobile = useMediaQuery({ maxWidth: "560px" });
  const [theUser, setTheUser] = useState<UserInfo | null>();
  const [userProfile, setUserProfile] = useState<UserType | null>(null);
  const monthlyMember = userProfile?.monthlyMembership;
  const annualMember = userProfile?.annualMembership;

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
        if (querySnapshot.docs.length > 0) {
          setUserProfile(querySnapshot.docs[0].data());
        }

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

      toast.success("Successfully signed in.");
    } catch (err) {
      toast.error("There was an error signing you in. ");
    }
  };

  const handleSignOut = async () => {
    try {
      const res = await signOut(auth);
      toast.success("Successfully signed out.");
    } catch (err) {
      toast.error("There was an error signing you out.");
    }
  };

  const handleSubscriptionCancel = async function () {
    try {
      const subscriptionId = userProfile?.subscriptionId;
      const q = query(
        collection(db, "users"),
        where("email", "==", theUser?.email)
      );
      const querySnapshot = await getDocs(q);
      const userRefId = querySnapshot.docs[0].id;
      console.log(userRefId);
      console.log(subscriptionId);

      const response = await axios.post("/api/cancel-subscription", {
        subscriptionId,
        // user: theUser,
        user_ref: userRefId,
      });

      toast.success("You have successfully unsubscribed.");
    } catch (err) {
      console.log(err);
      toast.error("An error occureed. Please contact support");
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
        <div
          className={`h-[75px] w-full  flex items-center ${
            subPage ? "justify-end" : "justify-center"
          } `}
        >
          <div
            className={`w-[70%] flex items-center ${
              subPage ? "justify-end" : "justify-center"
            } gap-6 text-gray900`}
          >
            {isMobile ? (
              <RxHamburgerMenu size={25} />
            ) : (
              <>
                {!subPage && (
                  <>
                    <a
                      href="#pricing"
                      onClick={handleAnchorClick}
                      className=" cursor-pointer "
                    >
                      Pricing
                    </a>
                    {/* <a
                      href="#faq"
                      onClick={handleAnchorClick}
                      className=" cursor-pointer"
                    >
                      FAQ
                    </a> */}

                    <Button
                      primary
                      disabled
                      label="View collection"
                      // functionality={() => {
                      //   router.push("/collection");
                      // }}
                    />
                  </>
                )}

                {theUser ? (
                  <div className="flex items-center gap-4 ">
                    <div className="w-auto px-2 h-[45px] border-gray900 border-2 flex items-center relative justify-center gap-2 rounded-sm text-white">
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
                    {(monthlyMember || annualMember) && (
                      <>
                        <button
                          onClick={handleSubscriptionCancel}
                          className="px-4 py-[11px] rounded-lg bg-rose-400 text-white font-light"
                        >
                          Unsubscribe
                        </button>
                      </>
                    )}
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
