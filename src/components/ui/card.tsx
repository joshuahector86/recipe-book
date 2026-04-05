import { Link } from "react-router-dom";

type Difficulty = "Easy" | "Medium" | "Hard";

interface CardProps {
  title: string;
  description?: string;
  image?: string;
  tags?: string[];
  cookTime?: string;
  difficulty?: Difficulty;
  to?: string;
  onClick?: () => void;
}

const difficultyColor: Record<Difficulty, string> = {
  Easy: "text-accent-sage",
  Medium: "text-accent-saffron",
  Hard: "text-accent-terracotta",
};

const cardClassName =
  "bg-bg-graphite rounded-2xl overflow-hidden transition-all duration-300 hover:bg-bg-slate hover:-translate-y-1 hover:shadow-2xl cursor-pointer group";

export const Card = ({
  title,
  description,
  image,
  tags,
  cookTime,
  difficulty,
  to,
  onClick,
}: CardProps) => {
  const content = (
    <>
      {image && (
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-5">
        <h3 className="text-text-parchment font-semibold text-lg leading-snug mb-2">
          {title}
        </h3>
        {description && (
          <p className="text-text-mist text-sm leading-relaxed line-clamp-2 mb-4">
            {description}
          </p>
        )}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 bg-bg-slate text-accent-saffron rounded-full border border-accent-saffron/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {(cookTime || difficulty) && (
          <>
            <div className="border-t border-bg-slate mt-2 mb-3" />
            <div className="flex items-center justify-between text-xs">
              {cookTime && (
                <span className="text-text-ash">
                  <span className="text-text-mist">Time:</span> {cookTime}
                </span>
              )}
              {difficulty && (
                <span className={`font-semibold ${difficultyColor[difficulty]}`}>
                  {difficulty}
                </span>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cardClassName}>
        {content}
      </Link>
    );
  }

  return (
    <div className={cardClassName} onClick={onClick}>
      {content}
    </div>
  );
};
