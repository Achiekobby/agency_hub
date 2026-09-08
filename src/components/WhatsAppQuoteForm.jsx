import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { MessageCircle } from 'lucide-react';
import { CTA, whatsappHref } from '../data/site';

const fieldClass =
  'mt-2 w-full rounded-lg border border-brand_teal/25 bg-white px-4 py-3 text-brand_navy placeholder:text-slate_grey/60 focus:border-brand_cyan focus:outline-none focus:ring-2 focus:ring-brand_cyan/30';

const WhatsAppQuoteForm = ({ fields, buildMessage, submitLabel, title, intro, className = '' }) => {
  const initialValues = fields.reduce((acc, field) => {
    acc[field.name] = '';
    return acc;
  }, {});

  const shape = {};
  fields.forEach((field) => {
    let schema = Yup.string().trim().required(`${field.label} is required`);
    if (field.max) schema = schema.max(field.max);
    shape[field.name] = schema;
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object(shape)}
      onSubmit={(values) => {
        window.open(whatsappHref(buildMessage(values)), '_blank', 'noopener,noreferrer');
      }}
    >
      {({ isSubmitting }) => (
        <Form className={`grid grid-cols-1 gap-5 rounded-2xl border border-brand_teal/20 bg-white p-6 shadow-sm sm:grid-cols-2 sm:p-8 ${className}`}>
          {(title || intro) && (
            <div className="sm:col-span-2">
              {title && (
                <h2 className="text-lg font-bold tracking-tight text-brand_navy">{title}</h2>
              )}
              {intro && (
                <p className="mt-2 text-sm leading-relaxed text-slate_grey">{intro}</p>
              )}
            </div>
          )}
          {fields.map((field) => (
            <div key={field.name} className={field.half ? 'sm:col-span-1' : 'sm:col-span-2'}>
              <label htmlFor={field.name} className="text-sm font-semibold text-brand_navy">
                {field.label}
              </label>
              {field.as === 'textarea' ? (
                <Field
                  as="textarea"
                  id={field.name}
                  name={field.name}
                  rows={field.rows || 4}
                  placeholder={field.placeholder}
                  className={`${fieldClass} resize-none`}
                />
              ) : field.as === 'select' ? (
                <Field as="select" id={field.name} name={field.name} className={fieldClass}>
                  <option value="">Choose one</option>
                  {field.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Field>
              ) : (
                <Field
                  id={field.name}
                  name={field.name}
                  type="text"
                  placeholder={field.placeholder}
                  className={fieldClass}
                />
              )}
              <ErrorMessage
                name={field.name}
                component="p"
                className="mt-1 text-sm text-brand_orange-700"
              />
            </div>
          ))}
          <div className="sm:col-span-2">
            <button type="submit" disabled={isSubmitting} className={CTA.primary}>
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {submitLabel}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default WhatsAppQuoteForm;
