import Header from "@/components/header";
import * as Switch from "@radix-ui/react-switch";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-4">
      <Header>
        <span className="text-wdbBlue">Web Development</span> at Berkeley
      </Header>
      <p>
        Full-stack web development project template . Check the README for more
        information!
      </p>
      <div className="space-x-2">
        <label htmlFor="example-switch">
          Example: Switch component from Radix UI
        </label>
        <Switch.Root
          className="relative h-6 w-10 bg-black px-1"
          id="example-switch"
        >
          <Switch.Thumb className="block h-4 w-4 bg-white data-[state=checked]:ml-auto" />
        </Switch.Root>
      </div>
    </div>
  );
}
