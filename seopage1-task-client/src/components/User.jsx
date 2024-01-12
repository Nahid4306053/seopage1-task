/* eslint-disable react/prop-types */
export default function User({avatar,user}) {
  return (
    <div className="user text-gray-600 font-semibold flex gap-2">
      <img
        src={avatar}
        className="h-6  w-6 rounded-full"
        alt=""
      />
      <h2 className="text-sm">{user}</h2>
    </div>
  );
}
