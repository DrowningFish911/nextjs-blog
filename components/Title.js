
export default function Title({children}) {

    return (
        <div className="flex w-1/2 mx-auto">
            <h1 className="subpixel-antialiased text-5xl font-bold">
                {children}
            </h1>
        </div>

    );
  }