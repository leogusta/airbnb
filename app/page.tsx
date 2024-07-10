import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";

function HomePage() {
  return (
    <>
      <h1 className="text-3xl">HomePage</h1>
      <Button disabled>
        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
    </>
  );
}

export default HomePage;
