import {Skeleton} from "@/components/ui/skeleton";

export default function Loader() { 
    return(
        <div className="flex justify-start">
            <Skeleton className="h-10 w-64 rounded-md"/>

        </div>
    )
}