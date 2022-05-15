import { button } from './Button.css';

type Props = React.PropsWithChildren<
    JSX.IntrinsicElements['button']
>;

export const Button = (props: Props) => {
    return <button {...props} className={button} />;
};
