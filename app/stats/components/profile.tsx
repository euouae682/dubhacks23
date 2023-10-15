export function Profile() {
  return (
    <div className="flex gap-5 p-5 bg-orange-100 rounded-xl">
      <div className="text-xl">
        <h2 className="text-3xl text-orange-900 font-bold mb-5">Luna Silver</h2>

        <p className="text-orange-600">
          <strong className="text-orange-900 font-bold">Weight:</strong> 165
          pounds
        </p>
        <p className="text-orange-600">
          <strong className="text-orange-900 font-bold">Sex:</strong> Female
        </p>
        <p className="text-orange-600">
          <strong className="text-orange-900 font-bold">Birthday:</strong>{" "}
          05/10/1998
        </p>
        <p className="text-orange-600">
          <strong className="text-orange-900 font-bold">Height:</strong> 5' 5''
        </p>
        <p className="text-orange-600">
          <strong className="text-orange-900 font-bold">Diagnose:</strong> Stage
          3 Burkettis Lukeimia
        </p>
      </div>

      <img src="doctor-temp.jpg" className="w-5/12" />
    </div>
  );
}
