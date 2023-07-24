"use client";
import { useEffect, useState } from "react";
import PricingBox from "./PricingBox";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { UserType } from "../types/UserType";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

const PricingBody = function () {
  const [user, setUser] = useState<UserType | null>({});
  const [userId, setUserId] = useState("");
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const q = query(
            collection(db, "users"),
            where("email", "==", user.email)
          );
          const querySnapshot = await getDocs(q);
          setUserId(querySnapshot.docs[0].id);

          const userData = { ...querySnapshot.docs[0].data() };
          console.log(userData);
          setUser(userData);
          console.log(userData);
        } catch (err) {
          console.log(err);
        }
      } else {
        setUser(null);
      }
    });
  }, []);
  console.log("loop");
  return (
    <div className="">
      <div className="flex justify-center items-center flex-col gap-6 md:flex-row md:gap-4">
        <PricingBox
          userRefId={userId}
          currentUser={user}
          title="Starter"
          featuresBool={[true, false, true, false, false, false]}
          price={"€0.00"}
          planLabel={
            (!user?.annualMembership &&
              !user?.monthlyMembership &&
              "Subscribed") ||
            "Subscribe"
          }
        />
        <PricingBox
          userRefId={userId}
          currentUser={user}
          planLabel={(user?.annualMembership && "Subscribed") || "Subscribe"}
          recommended={true}
          subtitle="billed annually"
          title="Premium"
          priceId="price_1NRYkoHvKmtkdhL0Q2t9xHDz"
          price={"€3.49"}
          featuresBool={[true, true, true, true, true, true]}
        />
        <PricingBox
          userRefId={userId}
          currentUser={user}
          planLabel={(!user?.monthlyMembership && "Subscribed") || "Subscribe"}
          subtitle="billed monthly"
          title="Premium"
          priceId="price_1NRYjeHvKmtkdhL0q4d697Fg"
          price={"5.99"}
          featuresBool={[true, true, true, true, true, true]}
        />
      </div>
    </div>
  );
};

export default PricingBody;
