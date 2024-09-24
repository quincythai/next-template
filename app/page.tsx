import Header from "@/components/header";

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
    </div>
  );
}
