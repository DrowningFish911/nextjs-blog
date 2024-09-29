
export default function Title({children}) {

    return (
        <div className="flex justify-center">
            <h1 className="subpixel-antialiased text-5xl font-bold">
                {children}
            </h1>
        </div>

    );
  }