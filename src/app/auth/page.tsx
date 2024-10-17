import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

const AuthPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 w-1/5 mx-auto my-auto">
      <h2 className="text-7xl font-bold">Sign in</h2>
      <div className="w-full flex flex-col gap-6">
        <Input placeholder="Email" />
        <Input placeholder="Password" />
      <div className="flex gap-3 mx-auto">
        <Checkbox></Checkbox>
        <span>Remember me</span>
      </div>
      <Button className="text-xl p-6">Login</Button>
      </div>
    </div>
  );
};

export default AuthPage;
