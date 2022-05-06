export default function Footer(props) {
  return (
    <footer className="bg-slate-900 grid grid-cols-3 text-slate-50 text-center p-8 font-semibold place-items-center">
      <div className="text-slate-900 flex flex-col gap-4">
        <select className="rounded">
          <option>English</option>
          <option>Dutch</option>
          <option>Espa&ntilde;ol</option>
        </select>
        <select className="rounded">
          <option>ft/miles</option>
          <option>meters/km</option>
        </select>
      </div>
      <div>
        <h4>contact</h4>
        <ul className="font-normal text-slate-300">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
        </ul>
      </div>
      <div>
        <h4>discover</h4>
        <ul className="font-normal text-slate-300">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
        </ul>
      </div>
    </footer>
  )
}