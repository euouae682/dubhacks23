import Image from "next/image"

interface Note {
    author: String,
    date: String,
    subtitle: String,
    description: String
}

export function Note({ author, date, subtitle, description }: Note) {
    return <div className="w-5/6">
        <div className="flex">
            <Image src="" alt="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
            width={100} height={100}/>
            <div>
                <h1>{ `${author} Notes` }</h1>
                <h2>{ date }</h2>
                <h2>{ subtitle }</h2>
            </div>
        </div>
        <p>
            { description }
        </p>
    </div>
}
