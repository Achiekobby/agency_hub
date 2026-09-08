import React from 'react';
import { Link } from 'react-router';
import PageLayout from '../components/PageLayout';
import Seo from '../components/Seo';
import { CTA } from '../data/site';

const NotFound = () => (
  <PageLayout>
    <Seo title="Page not found" description="That page is not on this site." />
    <div className="mx-auto max-w-xl px-4 py-24 text-center sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-brand_teal">404</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-brand_navy">
        This page is not published.
      </h1>
      <p className="mt-4 leading-relaxed text-slate_grey">
        Check the address, or go back to local delivery and request a quote.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link to="/" className={CTA.primary}>
          Home
        </Link>
        <Link to="/local-delivery" className={CTA.secondary}>
          Local delivery
        </Link>
      </div>
    </div>
  </PageLayout>
);

export default NotFound;
