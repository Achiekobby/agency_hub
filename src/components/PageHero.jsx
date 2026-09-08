import React from 'react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { CTA } from '../data/site';

const PageHero = ({ kicker, title, description, primary, secondary }) => (
  <header className="border-b border-brand_teal/15 bg-brand_cream/50">
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      {kicker && (
        <p className="text-sm font-semibold uppercase tracking-wider text-brand_teal">
          {kicker}
        </p>
      )}
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-brand_navy sm:text-4xl lg:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mt-5 text-lg leading-relaxed text-slate_grey">{description}</p>
      )}
      {(primary || secondary) && (
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {primary}
          {secondary}
        </div>
      )}
    </div>
  </header>
);

export const TextLink = ({ to, children }) => (
  <Link to={to} className={`${CTA.ghost} underline-offset-4 hover:underline`}>
    {children}
    <ArrowRight className="h-4 w-4" aria-hidden="true" />
  </Link>
);

export default PageHero;
