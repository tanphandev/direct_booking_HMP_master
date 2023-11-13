import { roomFeatures } from "@/api/mock-data/room-features";
import Image from "next/image";

const RoomFeatures = () => {
    const lang = "vi";
    const pathIcon = "/assets/icons";
    
    return (
        <div className="mt-4">
            <h2 className="font-bold mb-4 pb-2 border-b-2">Tiện nghi nổi bật</h2>
            <div className="flex flex-wrap gap-3">
            {roomFeatures?.map((feature) => (
            feature.lang === lang && (
              <div key={feature.feature_id} className="flex py-3 items-center border px-3 border-[#e4e4e4] rounded ">
                <input type="checkbox" className="mr-2 w-4 h-4 "/>
                <Image src={`${pathIcon}/${feature.feature_icon.replace('pro:', '')}`} alt={feature.feature_title} width={24} height={24} />
                <span className="pl-4">{feature.feature_title}</span>
              </div>
            )))}
            </div>
        </div>
    );
}
export default RoomFeatures