import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Business listings, company profiles, and local discovery',
      description: 'Browse useful business listings, compare company details, and contact trusted services through a modern directory experience.',
      openGraphTitle: 'Business listings and local discovery',
      openGraphDescription: 'Discover businesses, services, and company profiles through a focused directory experience.',
      keywords: ['business listing', 'company directory', 'local services', 'business discovery'],
    },
    hero: {
      badge: 'Curated business directory',
      title: ['Discover trusted businesses', 'without the directory clutter.'],
      description: 'Browse company profiles, compare services, inspect contact details, and find the right business with a polished listing-first experience.',
      primaryCta: { label: 'Browse listings', href: '/listing' },
      secondaryCta: { label: 'Submit a business', href: '/create' },
      searchPlaceholder: 'Search businesses, services, cities, and categories',
      focusLabel: 'Focus',
      featureCardBadge: 'latest cover rotation',
      featureCardTitle: 'Latest posts shape the visual identity of the homepage.',
      featureCardDescription: 'Recent listings stay at the center of the experience without changing any core platform behavior.',
    },
    intro: {
      badge: 'About the platform',
      title: 'Built for business discovery, comparison, and confident contact.',
      paragraphs: [
        'This directory brings together company identity, service summaries, addresses, contact routes, and supporting business details in one clean browsing system.',
        'Visitors can move from a broad category to a specific business detail page without fighting stretched layouts, noisy cards, or buried calls to action.',
        'Every page is shaped around the same job: help people evaluate a business quickly and take the next step with confidence.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Listing-first homepage with stronger emphasis on businesses and services.',
        'Connected sections for listings, categories, locations, and supporting resources.',
        'Cleaner browsing rhythm designed to make exploration feel easier.',
        'Lightweight interactions that keep the experience fast and readable.',
      ],
      primaryLink: { label: 'Browse articles', href: '/article' },
      secondaryLink: { label: 'Search businesses', href: '/search' },
    },
    cta: {
      badge: 'Start exploring',
      title: 'Add your business where serious searchers can find it.',
      description: 'Create a clear listing with services, location, contact details, and a concise profile built for comparison.',
      primaryCta: { label: 'Create listing', href: '/create' },
      secondaryCta: { label: 'Contact support', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'Our Story',
    title: 'A sharper way to discover and compare businesses.',
    description: `${slot4BrandConfig.siteName} helps visitors find useful businesses through clear listings, practical filters, and detail pages that make contact easy.`,
    paragraphs: [
      'The directory is designed for people who want useful company information quickly: what the business does, where it operates, how to reach it, and why it is worth considering.',
      'For business owners, the platform provides a clean place to present services without a crowded marketplace feel.',
    ],
    values: [
      {
        title: 'Listing-first clarity',
        description: 'Company cards and detail pages keep names, categories, contact details, and summaries easy to scan.',
      },
      {
        title: 'Practical comparison',
        description: 'Visitors can compare businesses by category, location, services, and supporting details before reaching out.',
      },
      {
        title: 'Contact-ready pages',
        description: 'Every listing detail page is shaped around quick actions such as website visits, calls, email, and location review.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Need help with a listing, category, or business profile?',
    description: 'Tell us whether you want to add a company, update business details, claim a listing, or ask about directory placement. We will route the request clearly.',
    formTitle: 'Send your directory request',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search business listings, service categories, locations, and company profiles across the site.',
    },
    hero: {
      badge: 'Search the archive',
      title: 'Find businesses, services, and categories faster.',
      description: 'Search across company names, service terms, locations, and listing categories.',
      placeholder: 'Search by business, service, city, or category',
    },
    resultsTitle: 'Latest business listings',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit a business listing for the site.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to create a business listing.',
      description: 'Use your account to open the listing workspace and prepare company profiles for the directory.',
    },
    hero: {
      badge: 'Publishing workspace',
      title: 'Create a clear business profile.',
      description: 'Add the company name, category, service summary, website, images, and details visitors need before contacting you.',
    },
    formTitle: 'Listing details',
    submitLabel: 'Submit listing',
    successTitle: 'Listing submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this site.',
      badge: 'Member access',
      title: 'Welcome back to your publishing space.',
      description: 'Login to manage saved directory activity, submit business listings, and keep company details ready for review.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for this site.',
      badge: 'Site access',
      title: 'Create your account and start publishing.',
      description: 'Create an account to submit business listings, save contact details, and prepare polished company profiles.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related business media',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
