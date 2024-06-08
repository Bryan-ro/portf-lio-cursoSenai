import { Plus, Link } from "react-bootstrap-icons";


interface FilterItemProps {
    image: string;
    filterKey: "desktop" | "notebook" | "web" | "mobile" | "all"
}


export default function FilterItem({ image, filterKey }: FilterItemProps) {
    return (
        <div className={`group filter-item mb-8 sm:w-96 sm:h-96 w-h-80 h-80 ${filterKey}`}>
            <div className="relative overflow-hidden w-full h-full">
                <img src={image} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-white bg-opacity-0  group-hover:bg-opacity-25 duration-300"></div>

                <div className="bg-blue-600 absolute w-full h-12 -bottom-12 group-hover:-bottom-0 duration-300 flex text-white">

                    <a href="" className="w-1/2 flex justify-center items-center border-r-black border-r">
                        <Plus className="h-full w-20" />
                    </a>



                    <a href="" className="w-1/2 flex justify-center items-center">
                        <Link className="h-full w-10" />
                    </a>
                </div>
            </div>
        </div >
    );
}