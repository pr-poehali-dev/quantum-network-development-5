import GradientBlinds from "@/components/GradientBlinds"
import Navbar from "@/components/Navbar"
import Icon from "@/components/ui/icon"

const features = [
  {
    icon: "BookOpen",
    title: "Инструкции по оборудованию",
    desc: "Детальные руководства с иллюстрациями и схемами для каждой модели GPS-трекера, датчика и антенны",
  },
  {
    icon: "Zap",
    title: "Схемы подключения",
    desc: "Чёткие электрические схемы для легковых, грузовиков и спецтехники — под каждую модель оборудования",
  },
  {
    icon: "Settings",
    title: "Настройка и конфигурация",
    desc: "Пошаговые руководства по настройке SIM-карт, трекеров, датчиков и программного обеспечения",
  },
  {
    icon: "AlertTriangle",
    title: "Поиск неисправностей",
    desc: "База типичных проблем с фильтрацией по типу оборудования, коду ошибки и симптому",
  },
  {
    icon: "MessageSquare",
    title: "Чат с поддержкой",
    desc: "Оперативная связь с более опытными коллегами и техподдержкой для решения срочных вопросов",
  },
  {
    icon: "Users",
    title: "Форум специалистов",
    desc: "Обмен опытом, лайфхаки и решения нестандартных ситуаций от профессионального сообщества",
  },
]

const stats = [
  { value: "150+", label: "Моделей оборудования" },
  { value: "500+", label: "Инструкций и схем" },
  { value: "3", label: "Типа транспорта" },
  { value: "24/7", label: "Техподдержка" },
]

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#060d1f]">
      <Navbar />

      {/* Animated Gradient Background */}
      <div className="fixed inset-0 w-full h-full flex items-center justify-center">
        <GradientBlinds
          gradientColors={["#060d1f", "#0a1f3d", "#0d3060", "#1a4a8a", "#0f2d6b"]}
          angle={15}
          noise={0.2}
          blindCount={13}
          blindMinWidth={50}
          spotlightRadius={0.38}
          spotlightSoftness={1.6}
          spotlightOpacity={0.42}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="overlay"
        />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Hero Section */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex items-center justify-center min-h-screen w-full px-5 sm:px-20">
            <div className="relative z-10 flex max-w-4xl flex-col items-center gap-8 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 backdrop-blur">
                <Icon name="Satellite" size={14} />
                <span>Профессиональный инструмент монтажника</span>
              </div>

              <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl text-balance drop-shadow-2xl">
                Установка GPS
                <br />
                <span className="text-blue-400">без ошибок</span>
              </h1>
              <p className="text-xl text-white/80 max-w-2xl text-pretty drop-shadow-lg">
                Все инструкции, схемы подключения и решения неисправностей для систем мониторинга транспорта — в одном приложении.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-blue-400 focus:outline-none shadow-2xl shadow-blue-500/30">
                  <Icon name="Play" size={20} />
                  Открыть приложение
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition-all hover:bg-white/10 hover:border-white/40 focus:outline-none shadow-xl">
                  Смотреть демо
                  <Icon name="ChevronRight" size={20} />
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8 w-full">
                {stats.map((s) => (
                  <div key={s.label} className="flex flex-col items-center gap-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur">
                    <span className="text-3xl font-bold text-blue-400">{s.value}</span>
                    <span className="text-xs text-white/60 text-center">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="relative z-10 w-full px-5 sm:px-20 pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Всё необходимое для работы</h2>
              <p className="text-white/60 text-lg max-w-xl mx-auto">Быстрый доступ к знаниям прямо на объекте — без интернета, без ожидания</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all hover:bg-white/10 hover:border-blue-400/30 cursor-pointer"
                >
                  <div className="mb-4 w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-all">
                    <Icon name={f.icon} size={20} className="text-blue-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vehicle Types Section */}
        <section className="relative z-10 w-full px-5 sm:px-20 pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 sm:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-white mb-3">Разделение по типам транспорта</h2>
                <p className="text-white/60">Инструкции и схемы сгруппированы под каждый класс техники</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { icon: "Car", label: "Легковые автомобили", count: "48 моделей трекеров" },
                  { icon: "Truck", label: "Грузовые автомобили", count: "62 модели трекеров" },
                  { icon: "Construction", label: "Спецтехника", count: "40 моделей трекеров" },
                ].map((v) => (
                  <div key={v.label} className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-blue-400/30 hover:bg-white/10 transition-all cursor-pointer">
                    <div className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-400/20 flex items-center justify-center">
                      <Icon name={v.icon} size={28} className="text-blue-400" />
                    </div>
                    <div className="text-center">
                      <div className="text-white font-semibold text-lg">{v.label}</div>
                      <div className="text-white/50 text-sm mt-1">{v.count}</div>
                    </div>
                    <div className="flex items-center gap-1 text-blue-400 text-sm font-medium">
                      Открыть инструкции <Icon name="ArrowRight" size={14} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 w-full px-5 sm:px-20 pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="rounded-3xl border border-blue-400/20 bg-blue-500/10 backdrop-blur p-10 sm:p-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Готов начать работу?</h2>
              <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
                Доступ к полной базе инструкций, схем и поддержке коллег — прямо сейчас
              </p>
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-10 py-4 text-lg font-semibold text-white transition-all hover:bg-blue-400 shadow-2xl shadow-blue-500/30">
                <Icon name="LogIn" size={20} />
                Войти в приложение
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Index
