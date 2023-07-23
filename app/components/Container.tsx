interface ContrainerProps {
  children: React.ReactElement | React.ReactElement[];
}

const Container = function ({ children }: ContrainerProps): JSX.Element {
  return (
    <div className="relative z-30 px-4 w-full sm:px-6 md:px-4 lg:px-8 xl:px-20 ">
      {children}
    </div>
  );
};

export default Container;
