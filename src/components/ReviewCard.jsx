function ReviewCard({ r }) { 
    return (
      <div className="w-[350px] flex-shrink-0 bg-white shadow-2xl rounded-3xl flex flex-col p-6 gap-3">
        <div className="flex justify-between items-center">
          <p className="font-bold text-lg text-[#0C2C55] truncate w-[60%]">{r.Name}</p>
          <p className="font-medium text-xs text-gray-500 italic">{r.When}</p>
        </div>
        <div className="w-full h-[1px] bg-gray-200" />
        <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
          "{r.Review}"
        </p>
        {r.Response && (
           <div className="mt-2 text-[10px] text-[#358dad] bg-blue-50 p-2 rounded-lg">
             <strong>Respon:</strong> {r.Response}
           </div>
        )}
      </div>
    );
}
export default ReviewCard