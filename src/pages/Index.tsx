import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfoCard from "@/components/InfoCard";
import { Calculator, Users, LineChart, FileText } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Бухгалтерия.Инфо
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Узнайте о принципах работы бухгалтерии и её роли в современном бизнесе
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Accounting Info Section */}
        <section className="w-full py-12 md:py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="mb-10">
              <h2 className="text-2xl font-bold tracking-tight text-center mb-4">Бухгалтерия и её роль</h2>
              <p className="text-muted-foreground text-center max-w-3xl mx-auto">
                Бухгалтерия — это система учёта и контроля материальных и денежных ресурсов предприятия. 
                Её задача — предоставлять точную информацию о финансовом состоянии компании.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <InfoCard 
                title="Финансовый учёт" 
                icon={<Calculator className="h-8 w-8" />} 
                description="Основа бухгалтерской работы"
              >
                <p>
                  Включает ведение бухгалтерских книг, составление финансовых отчётов, учёт доходов и 
                  расходов. Финансовый учёт даёт полную картину экономического состояния предприятия.
                </p>
              </InfoCard>
              
              <InfoCard 
                title="Налоговый учёт" 
                icon={<FileText className="h-8 w-8" />} 
                description="Взаимодействие с налоговыми органами"
              >
                <p>
                  Бухгалтерия отвечает за правильный расчёт и своевременную уплату налогов, 
                  подготовку налоговой отчётности в соответствии с законодательством.
                </p>
              </InfoCard>
              
              <InfoCard 
                title="Аналитика" 
                icon={<LineChart className="h-8 w-8" />} 
                description="Анализ экономических показателей"
              >
                <p>
                  Современная бухгалтерия не только ведёт учёт, но и анализирует экономические 
                  показатели, помогая руководству принимать обоснованные управленческие решения.
                </p>
              </InfoCard>
            </div>
          </div>
        </section>
        
        {/* About Us Section */}
        <section className="w-full py-12 md:py-16 bg-accent/30">
          <div className="container px-4 md:px-6">
            <div className="mb-10">
              <h2 className="text-2xl font-bold tracking-tight text-center mb-4">О нас</h2>
              <p className="text-muted-foreground text-center max-w-3xl mx-auto">
                Мы профессиональная команда, создавшая этот информационный ресурс о бухгалтерии.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col space-y-4">
                <h3 className="text-xl font-bold">Наша миссия</h3>
                <p>
                  Наша цель — создать информативный ресурс, который доступно объясняет принципы работы 
                  бухгалтерии и ее важность для современных организаций. Мы стремимся демистифицировать 
                  бухгалтерию и показать её как интересную и важную профессиональную область.
                </p>
                <h3 className="text-xl font-bold">Наш подход</h3>
                <p>
                  Мы объединили знания о цифровых технологиях и финансовом учёте, 
                  создав современный образовательный ресурс для всех интересующихся.
                </p>
              </div>
              
              <InfoCard 
                title="Наша команда" 
                icon={<Users className="h-8 w-8" />} 
                className="h-full"
              >
                <div className="space-y-4">
                  <div className="border-b pb-2">
                    <h4 className="font-medium">Моргунов Максим</h4>
                    <p className="text-sm text-muted-foreground">Руководитель проекта</p>
                  </div>
                  <div className="border-b pb-2">
                    <h4 className="font-medium">Дмитрий Петров</h4>
                    <p className="text-sm text-muted-foreground">Эксперт по бухгалтерии</p>
                  </div>
                  <div className="border-b pb-2">
                    <h4 className="font-medium">Мария Сидорова</h4>
                    <p className="text-sm text-muted-foreground">Веб-разработчик</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Джавид Аббасов</h4>
                    <p className="text-sm text-muted-foreground">Дизайнер</p>
                  </div>
                </div>
              </InfoCard>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;