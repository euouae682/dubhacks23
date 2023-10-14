// How to implement diagram:
// add image map
// iterate for: circle shape, coords, 

// for each one, change to cursor and create popup
import Image from "next/image";

export function Diagram() {
    return (
        <div className="col-span-3">
            <Image
            src="/TEMP.png"
            alt="TEMP diagram"
            sizes="100vw"
            style={{
                width: 'auto',
                height: '100%',
            }}
            width={150}
            height={351}
            useMap="#diagram"   
            />

            <map name="diagram">
            </map>
        </div>
    )
  }
  
