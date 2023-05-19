export const Main: React.FC<{ children: JSX.Element }> = ({
  children,
}): JSX.Element => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {children}
    </main>
  );
};
