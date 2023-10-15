import { useState, useEffect } from 'react';

export function Medications() {
  const patient_id = 1
  const [treatment, setTreatment] = useState(null)
  const [drugInfo, setDrugInfo] = useState(null)
  const [isLoading, setLoading] = useState(true)
 
  useEffect(() => {
    fetch(`/api/patients/${patient_id}/visits`)
      .then((res) => res.json())
      .then((data) => {
        setTreatment(data[0].treatment)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    if (treatment) {
      setLoading(true)
      fetch(`https://api.fda.gov/drug/label.json?search=openfda.generic_name:${treatment}&limit=1`)
      .then((res) => res.json())
      .then((data) => {
        const result = data['results'][0]
        console.log(result)
        setDrugInfo(result)
        setLoading(false)
      })
    }
  }, [treatment])
 
  if (isLoading) return <p>Loading...</p>
  if (!treatment) return <p>No medication data</p>
  if (!drugInfo) return <p>No medication data</p>

    return (
        <div className="col-span-3 bg-orange-200 p-5 rounded-xl text-orange-900">
        <div className="bg-orange-600 p-3">
          <div className="flex gap-3 text-white">
            <svg
              width="26"
              height="30"
              viewBox="0 0 26 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.3282 5.16661L21.2342 2.9921C19.6608 1.35819 17.0451 1.35819 15.4717 2.9921L2.6718 16.2843C1.18018 17.8333 1.18018 20.2844 2.67181 21.8334L4.76578 24.0079C6.33917 25.6418 8.95495 25.6418 10.5283 24.0079L23.3282 10.7157C24.8198 9.16675 24.8198 6.7156 23.3282 5.16661Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 18V18C12.8545 16.6519 10.3481 14.1455 9 11V11"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h4>{treatment}</h4>
          </div>
          <div className="grid grid-cols-2 gap-1">
            <div>
              <p className="text-xs line-clamp-6 hover:line-clamp-none">
                {drugInfo.information_for_patients[0]}
              </p>
            </div>
            <div>
              <p className="text-xs line-clamp-6">
                {drugInfo.adverse_reactions[0]}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  