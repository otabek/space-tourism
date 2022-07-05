const BackgroundImage = ({
  mobile,
  tablet,
  desktop,
  className = "",
  children,
}) => {
  return (
    <div
      className={`absolute bg-cover bg-center bg-no-repeat
                  ${mobile} ${tablet} ${desktop} ${className}
                `}
    >
      {children}
    </div>
  );
};

export default BackgroundImage;
