interface IVetorProps {
  progress?: number;
  fill?: string;
}

export const Vetor = ({ progress = 0, ...props }: IVetorProps) => (
  <>
    <svg
      width={52}
      height={2047}
      fill={props.fill || 'none'}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        strokeWidth="6px"
        className="svg-path"
        stroke="#fff"
        d="M1 0v2049"
      />
    </svg>
  </>
);
