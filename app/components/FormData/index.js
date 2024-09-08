import { useState } from "react";
import { formatTimestamp, formatUsername } from "@/app/libs/utils";

const FormData = () => {
  const [formData, setFormData] = useState({
    userId: "",
    zoneId: "",
  });

  const [response, setResponse] = useState(null);
  const [previousResponse, setPreviousResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const payload = {
        userId: parseInt(formData.userId, 10),
        zoneId: parseInt(formData.zoneId, 10),
      };

      if (isNaN(payload.userId) || isNaN(payload.zoneId)) {
        setError("ID atau zona tidak valid.");
        setLoading(false);
        setResponse(null);
        return;
      }

      const res = await fetch("/api/cek", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (res.ok) {
        setPreviousResponse(response);
        setResponse(result.data);
      } else {
        setError(result.error || "ERROR! Pastikan ID dan Server sudah benar!");
        setResponse(null);
      }
    } catch (error) {
      setError("Gagal menghubungi API");
      setResponse(null);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="space-y-4">
      <div className="p-6 rounded-lg shadow-md border border-gray-100">
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className="flex gap-2">
            <input
              type="tel"
              name="userId"
              placeholder="ID"
              value={formData.userId}
              onChange={handleChange}
              className="mt-1 p-3 w-full rounded-md border-gray-100 border shadow-sm sm:text-sm"
              required
            />

            <input
              type="tel"
              name="zoneId"
              placeholder="Server"
              value={formData.zoneId}
              onChange={handleChange}
              className="mt-1 p-3 w-full rounded-md border-gray-100 border shadow-sm sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 text-white ease-in duration-150 bg-blue-500 hover:bg-blue-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Proses..." : "Cek ID!"}
          </button>
        </form>
      </div>

      <div className="w-full">
        {error && (
          <div className="py-3 rounded-lg shadow-md bg-red-500 text-white text-center">
            <h6 className="font-bold">{error}</h6>
          </div>
        )}

        {response && (
          <div className="p-6 rounded-lg shadow-md border border-gray-100 leading-loose bg-white">
            <ul>
              <li>
                <strong>Username:</strong> {formatUsername(response.username)}
              </li>
              <li>
                <strong>Negara Pembuatan Akun:</strong>{" "}
                {response.create_role_country.toUpperCase()}
              </li>
              <li>
                <strong>Negara Terakhir Login:</strong>{" "}
                {response.this_login_country.toUpperCase()}
              </li>
              <li>
                <strong>Tanggal Pembuatan Akun:</strong>{" "}
                {formatTimestamp(response.user_reg_time)}
              </li>
              <li>
                <strong>Waktu Login Terakhir:</strong>{" "}
                {formatTimestamp(response.timestamp)}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormData;
