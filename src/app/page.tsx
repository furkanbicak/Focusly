import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


export default function Home() {
    return (
        <div className="flex gap-4">
            <Input />
            <Button size={"sm"} variant="primary">
                aksdlaksdlkalsd
            </Button>
            <Button variant="secondary">
                Secondary
            </Button>
            <Button variant="destructive">
                Destructive
            </Button>
            <Button variant="muted">
                Muted
            </Button>
            <Button variant="outline">
                Outline
            </Button>
            <Button variant="teritary">
                Teritary
            </Button>
        </div>
    );
}
