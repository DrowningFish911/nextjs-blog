
export default function Title({title, children}) {

    return (
        <div className="flex w-1/2 mx-auto">
            <h2 className="text-3xl font-bold pt-5">
                {title}
            </h2>
        </div>
    );
  }