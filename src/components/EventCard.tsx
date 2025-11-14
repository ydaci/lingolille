import { Calendar, MapPin } from "lucide-react";
import { Card } from "./ui/card";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  languageFlag: string;
}

export function EventCard({ title, date, time, location, languageFlag }: EventCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-gray-900 flex-1">{title}</h3>
        <span className="ml-3">{languageFlag}</span>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-gray-600">
          <Calendar className="w-4 h-4 text-[#FF7A00]" />
          <span className="text-sm">{date} • {time}</span>
        </div>
        
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin className="w-4 h-4 text-[#FF7A00]" />
          <span className="text-sm">{location}</span>
        </div>
      </div>
    </Card>
  );
}
