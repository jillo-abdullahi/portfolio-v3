export const Main: React.FC<{ children: JSX.Element }> = ({
  children,
}): JSX.Element => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 sm:px-24 bg-blue-900">
      {children}
    </main>
  );
};
