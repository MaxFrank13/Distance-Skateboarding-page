export default function ForumTab(props) {
  return (
    <section className="grid grid-cols-12 items-center bg-gradient-to-b hover:bg-gradient-to-r from-slate-900 to-slate-700 text-slate-200 hover:text-slate-100 text-xs p-6 font-bold rounded transition-all duration-500 shadow-md shadow-slate-700">
      <h3 className="col-span-5 justify-self-start text-lg">{props.forum_name}</h3>
      <p className="col-span-2">{props.topics}</p>
      <p className="col-span-2">{props.posts}</p>
      <p className="flex flex-col col-span-3 justify-self-end font-medium">
        <span>April 20th, 2022</span>
        <span>by stonemalone</span>
      </p>
    </section>
  )
}