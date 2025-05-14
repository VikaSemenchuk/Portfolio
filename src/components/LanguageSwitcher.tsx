import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { useLanguageStore } from '../store/useLanguageStore';
import { languages } from '../constants/languages';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const selectedLang = useLanguageStore((state) => state.language);
  const setLanguage = useLanguageStore((state) => state.setLanguage);

  const selected = languages.find((l) => l.code === selectedLang) || languages[0];

  const handleChange = (lang: typeof selected) => {
    i18n.changeLanguage(lang.code);
    setLanguage(lang.code);
  };

  return (
    <div className="relative w-36">
      <Listbox value={selected} onChange={handleChange}>
        <ListboxButton
          className={clsx(
            'relative block w-full rounded-lg bg-footer py-0.5 pr-8 pl-3 text-left text-sm/6 text',
            'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
          )}
        >
          {selected.label}
          <ChevronDownIcon
            className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
            aria-hidden="true"
          />
        </ListboxButton>

        <ListboxOptions
          anchor="bottom"
          transition
          className={clsx(
            'w-(--button-width) rounded-xl border border-white/5 bg-footer p-1 [--anchor-gap:--spacing(1)] focus:outline-none',
            'transition-smooth data-leave:data-closed:opacity-0'
          )}
        >
          {languages.map((lang) => (
            <ListboxOption
              key={lang.code}
              value={lang}
              className="group flex cursor-default items-center gap-2 rounded-lg px-3 py-1.5 select-none data-focus:bg-accent data-hover:bg-accent"
            >
              <div className="text-sm/6 text  data-focus:bg-accent data-hover:bg-accent">{lang.label}</div>
              <CheckIcon className="invisible size-4 fill-black group-data-selected:visible" />
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
}
