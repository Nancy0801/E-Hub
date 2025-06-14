import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export default function Home() {
  return (
    <div className="p-4">

    <div className="flex flex-col gap-y-4">
      <div>
        <Button variant={"elevated"}>button</Button>
      </div>
      <div>
        <Input placeholder="Input"/>
      </div>
      <div>
        <Progress value={50}/>
      </div>
      <div>
        <Textarea placeholder="Textarea" />
      </div>
      <div>
        <Checkbox id="checkbox" />
        <label htmlFor="checkbox" className="ml-2">Checkbox</label>
      </div>
    </div>
    </div>
  );
}
