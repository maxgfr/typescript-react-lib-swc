type Props = {
  name: string;
};

export function HelloWorld(props: Props) {
  return <h1 data-testid="h1">Hello {props.name}</h1>;
}
