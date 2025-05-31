import { Card, CardContent } from "@next-starter/ui/components/card";
import { use } from "react";
interface Props {
    title: string;
    value: Promise<number | string>;
}

export default function StatsCard({ title, value }: Props) {
    const count = use(value)
    return (
        <Card className="px-3 py-3 md:px-6 md:py-8 shadow-none cursor-pointer border rounded-lg bg-teal-100">
            <CardContent className="p-0">
                <div className="flex flex-col">
                    <span>{title}</span>
                    <span>{count}</span>
                </div>
            </CardContent>
        </Card>
    )
}
