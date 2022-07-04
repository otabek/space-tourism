const BackgroundImage = ({
  mobile,
  tablet,
  desktop,
  classNames = "",
  children,
}) => {
  return (
    <div
      className={`absolute bg-cover bg-center bg-no-repeat
                  ${mobile} ${tablet} ${desktop} ${classNames}
                `}
    >
      {children}
    </div>
  );
};

export default BackgroundImage;
