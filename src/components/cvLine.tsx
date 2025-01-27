interface CvLineProps {
  title: string;
  date: string;
  location?: string;
  description?: string;
}

export const CvLine: React.FC<CvLineProps> = ({
  title,
  date,
  location,
  description,
}) => {
  return (
    <div className="flex flex-col space-y-2 border-t border-divider pt-2 pb-3">
      <h3 className="font-bold">{title}</h3>
      <p className="text-sm text-text opacity-50">
        {date} {location}
      </p>
      <p>{description}</p>
    </div>
  );
};

export const CvLineShort: React.FC<CvLineProps> = ({
  title,
  date,
  location,
}) => {
  return (
    <div className="flex flex-col space-y-2">
      <h3 className="font-bold group-hover/box:text-secondary transition-colors duration-500">
        {title}
      </h3>
      <p className="text-sm text-text opacity-50">
        {date} {location}
      </p>
    </div>
  );
};
