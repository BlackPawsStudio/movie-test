"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import * as SignIn from "@clerk/elements/sign-in";
import * as Clerk from "@clerk/elements/common";
import { useRef } from "react";

const AuthPage = () => {
  const googleButton = useRef<HTMLButtonElement | null>(null);
  const githubButton = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <SignedOut>
        <SignIn.Root>
          <SignIn.Step
            name="start"
            className="flex flex-col items-center justify-center gap-12 w-1/5 mx-auto my-auto"
          >
            <Clerk.GlobalError className="block text-sm text-destructive" />
            <h2 className="text-7xl font-bold">Sign in</h2>
            <div className="w-full flex flex-col gap-6">
              <div className="flex w-full justify-between items-center gap-6">
                <Clerk.Connection name="google" asChild>
                  <button className="hidden" ref={googleButton} />
                </Clerk.Connection>
                <Clerk.Connection name="github" asChild>
                  <button className="hidden" ref={githubButton} />
                </Clerk.Connection>
                <Button
                  variant="secondary"
                  className="w-full"
                  onClick={() => {
                    localStorage.setItem("onSignIn", "true");
                    googleButton.current?.click();
                  }}
                >
                  Google
                </Button>
                <Button
                  variant="secondary"
                  className="w-full"
                  onClick={() => {
                    localStorage.setItem("onSignIn", "true");
                    githubButton.current?.click();
                  }}
                >
                  Github
                </Button>
              </div>
              <Clerk.Field name={"identifier"}>
                <Clerk.Input asChild>
                  <Input placeholder="Email" required />
                </Clerk.Input>
                <Clerk.FieldError className="block text-sm text-destructive" />
              </Clerk.Field>
              <Clerk.Field name={"password"}>
                <Clerk.Input asChild>
                  <Input placeholder="Password" type="password" />
                </Clerk.Input>
                <Clerk.FieldError className="block text-sm text-destructive" />
              </Clerk.Field>
              <div className="flex gap-3 mx-auto items-center cursor-pointer">
                <Checkbox id="remember"></Checkbox>
                <label htmlFor="remember" className="cursor-pointer">
                  Remember me
                </label>
              </div>
              <SignIn.Action submit asChild>
                <Button className="text-xl p-6">Login</Button>
              </SignIn.Action>
            </div>
          </SignIn.Step>
        </SignIn.Root>
      </SignedOut>
      <SignedIn>aaa</SignedIn>
    </>
  );
};

export default AuthPage;
