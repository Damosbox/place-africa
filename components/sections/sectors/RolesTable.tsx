import type { SectorRole } from "@/lib/types/content";

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/** Tableau « Qui fait quoi ». En dessous de `md`, chaque domaine devient une carte. */
export function RolesTable({
  roles,
  organisationLabel = "votre organisation",
}: {
  roles: SectorRole[];
  organisationLabel?: string;
}) {
  const org = capitalize(organisationLabel);
  return (
    <>
      <div className="hidden md:block overflow-hidden rounded-2xl border border-neutral-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-neutral-50 text-xs uppercase tracking-widest text-neutral-500">
            <tr>
              <th scope="col" className="px-5 py-3 font-bold w-48">Domaine</th>
              <th scope="col" className="px-5 py-3 font-bold">{org}</th>
              <th scope="col" className="px-5 py-3 font-bold text-brand-accent">Place Fuse</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100 bg-white">
            {roles.map((r) => (
              <tr key={r.domain} className="align-top">
                <th scope="row" className="px-5 py-4 font-semibold text-neutral-900">{r.domain}</th>
                <td className="px-5 py-4 text-neutral-700 leading-relaxed">{r.organisation}</td>
                <td className="px-5 py-4 text-neutral-600 leading-relaxed">{r.platform}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="md:hidden flex flex-col gap-3">
        {roles.map((r) => (
          <li key={r.domain} className="rounded-xl border border-neutral-200 bg-white p-4">
            <p className="font-semibold text-neutral-900 mb-3">{r.domain}</p>
            <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-1">{org}</p>
            <p className="text-sm text-neutral-700 leading-relaxed mb-3">{r.organisation}</p>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-1">Place Fuse</p>
            <p className="text-sm text-neutral-600 leading-relaxed">{r.platform}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
