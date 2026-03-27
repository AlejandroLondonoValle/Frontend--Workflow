import { Link } from "react-router-dom";
import StatusBadge from "./StatusBadge.jsx";
import PriorityBadge from "./PriorityBadge.jsx";

const formatDate = (value) => {
  try {
    return new Intl.DateTimeFormat("es-CO", {
      dateStyle: "medium",
      timeStyle: "short"
    }).format(new Date(value));
  } catch (error) {
    return value;
  }
};

function TaskCard({ task, onDelete, onComplete }) {
  return (
    <article className="card p-0 overflow-hidden">
      <div className="flex flex-col sm:flex-row">

        {/* ── Contenido principal — 65% ── */}
        <div className="flex flex-col gap-4 p-5 sm:w-[75%]">

          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold text-brand-dark leading-tight">
                {task.title}
              </h3>
              <div className="flex items-center gap-2">
                <StatusBadge completed={task.completed} />
                <PriorityBadge priority={task.priority} />
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-500 whitespace-pre-line">
              {task.description}
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 border border-slate-100 px-4 py-1">
            <ul className="divide-y divide-slate-100 text-sm">
              <li className="flex justify-between items-center py-2.5">
                <span className="flex items-center gap-2 font-semibold text-slate-400 text-xs uppercase tracking-wide">
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                    <rect x="2" y="2" width="5" height="5" rx="1" fill="currentColor" opacity="0.5" />
                    <rect x="9" y="2" width="5" height="5" rx="1" fill="currentColor" opacity="0.5" />
                    <rect x="2" y="9" width="5" height="5" rx="1" fill="currentColor" />
                    <rect x="9" y="9" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                  </svg>
                  Categoría
                </span>
                <span className="text-slate-700 font-medium">{task.category}</span>
              </li>
              <li className="flex justify-between items-center py-2.5">
                <span className="flex items-center gap-2 font-semibold text-slate-400 text-xs uppercase tracking-wide">
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                    <rect x="1" y="3" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <path d="M5 1v4M11 1v4M1 7h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  Creada
                </span>
                <span className="text-slate-600">{formatDate(task.createdAt)}</span>
              </li>
              <li className="flex justify-between items-center py-2.5">
                <span className="flex items-center gap-2 font-semibold text-slate-400 text-xs uppercase tracking-wide">
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M8 5v3.5l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  Código
                </span>
                <span className="text-slate-400 font-mono text-xs bg-slate-100 px-2 py-0.5 rounded-md">
                  #{task.id}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Panel de acciones — 35% ── */}
        <div className="flex sm:flex-col justify-end sm:justify-center items-center gap-3 px-5 pb-5 pt-0 sm:p-6 sm:w-[25%] shrink-0 sm:border-l sm:border-slate-100">
          <p className="hidden sm:block text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 text-center w-full">
            Acciones
          </p>

          <Link
            to={`/edit/${task.id}`}
            className="button-secondary text-center text-sm w-full"
          >
            Editar
          </Link>

          {!task.completed ? (
            <button
              type="button"
              onClick={() => onComplete(task)}
              className="button-primary text-sm w-full"
            >
              Marcar como completada
            </button>
          ) : null}

          <button
            type="button"
            onClick={() => onDelete(task)}
            className="button-danger text-sm w-full"
          >
            Eliminar
          </button>
        </div>

      </div>
    </article>
  );
}

export default TaskCard;