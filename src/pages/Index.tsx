import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const portfolioItems = [
    {
      id: 1,
      title: 'Абстрактная композиция',
      category: 'Живопись',
      image: 'https://cdn.poehali.dev/projects/50c82c56-2d16-4060-b885-7beb1106d0ae/files/6e836d2e-789d-457c-b8fc-cbac48fa5aa7.jpg',
      price: '45 000 ₽'
    },
    {
      id: 2,
      title: 'Энергия цвета',
      category: 'Экспрессионизм',
      image: 'https://cdn.poehali.dev/projects/50c82c56-2d16-4060-b885-7beb1106d0ae/files/0f275a84-dea4-4022-bc39-76d449e42ab4.jpg',
      price: '52 000 ₽'
    },
    {
      id: 3,
      title: 'Геометрия света',
      category: 'Минимализм',
      image: 'https://cdn.poehali.dev/projects/50c82c56-2d16-4060-b885-7beb1106d0ae/files/ce787daa-aa12-4839-8fdf-36d752f2ab3e.jpg',
      price: '38 000 ₽'
    }
  ];

  const exhibitions = [
    {
      date: 'Ноябрь 2024',
      title: 'Современное искусство',
      venue: 'Галерея "Манеж", Москва'
    },
    {
      date: 'Сентябрь 2024',
      title: 'Абстракция и форма',
      venue: 'Центр современного искусства, Санкт-Петербург'
    },
    {
      date: 'Июль 2024',
      title: 'Цвет и эмоция',
      venue: 'Музей современного искусства, Казань'
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold tracking-wider">
              CREATIVE STUDIO
            </h1>
            <div className="flex gap-6 md:gap-8">
              {['home', 'portfolio', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm md:text-base uppercase tracking-wide transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary font-semibold' : 'text-foreground'
                  }`}
                >
                  {section === 'home' ? 'Главная' : section === 'portfolio' ? 'Портфолио' : section === 'about' ? 'О нас' : 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 -z-10"></div>
        <div className="container mx-auto px-6 text-center animate-fade-in">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-wider">
            ИСКУССТВО
          </h2>
          <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            В ДВИЖЕНИИ
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light">
            Современные работы, вдохновленные эмоциями и формами. Каждая картина — это уникальная история,
            рассказанная через цвет и текстуру.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-none"
              onClick={() => scrollToSection('portfolio')}
            >
              Смотреть работы
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-foreground hover:bg-foreground hover:text-background px-8 py-6 text-lg rounded-none"
              onClick={() => scrollToSection('contact')}
            >
              Связаться
            </Button>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-4 tracking-wider">ПОРТФОЛИО</h2>
            <p className="text-lg text-muted-foreground">Избранные работы доступные для приобретения</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="group overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 rounded-none animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden aspect-square">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white w-full">
                      <p className="text-sm uppercase tracking-wider mb-1">{item.category}</p>
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-xl font-semibold">{item.price}</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground uppercase tracking-wide">{item.category}</p>
                      <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                    </div>
                    <Button className="bg-secondary hover:bg-secondary/90 rounded-none">
                      <Icon name="ShoppingCart" size={18} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-wider">О НАС</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Мы — команда современных художников, объединенных страстью к созданию уникальных произведений искусства.
                Наша миссия — делать современное искусство доступным и вдохновляющим.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Каждая работа создается вручную с использованием лучших материалов и техник. Мы экспериментируем с формами,
                цветами и текстурами, чтобы передать глубокие эмоции и создать визуальные истории.
              </p>
              
              <div className="flex gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-1">150+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">Работ</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-1">25+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">Выставок</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-1">8</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">Лет</div>
                </div>
              </div>
            </div>

            <div className="animate-scale-in">
              <h3 className="text-3xl font-bold mb-6 tracking-wider">ВЫСТАВКИ</h3>
              <div className="space-y-4">
                {exhibitions.map((exhibition, index) => (
                  <div 
                    key={index} 
                    className="border-l-4 border-primary pl-6 py-4 hover:bg-muted/50 transition-colors"
                  >
                    <div className="text-sm text-primary font-semibold uppercase tracking-wide mb-1">
                      {exhibition.date}
                    </div>
                    <h4 className="text-xl font-bold mb-1">{exhibition.title}</h4>
                    <p className="text-muted-foreground flex items-center gap-2">
                      <Icon name="MapPin" size={16} />
                      {exhibition.venue}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-5xl md:text-7xl font-bold mb-4 tracking-wider">КОНТАКТЫ</h2>
              <p className="text-lg text-muted-foreground">
                Свяжитесь с нами для приобретения работ или сотрудничества
              </p>
            </div>

            <Card className="border-2 border-border rounded-none animate-scale-in">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold uppercase tracking-wide mb-2">
                      Ваше имя
                    </label>
                    <Input 
                      type="text" 
                      placeholder="Иван Иванов"
                      className="rounded-none border-2 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold uppercase tracking-wide mb-2">
                      Email
                    </label>
                    <Input 
                      type="email" 
                      placeholder="ivan@example.com"
                      className="rounded-none border-2 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold uppercase tracking-wide mb-2">
                      Сообщение
                    </label>
                    <Textarea 
                      placeholder="Расскажите о вашем интересе..."
                      rows={6}
                      className="rounded-none border-2 focus:border-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 rounded-none text-lg py-6"
                  >
                    Отправить сообщение
                    <Icon name="Send" className="ml-2" size={18} />
                  </Button>
                </form>

                <div className="mt-8 pt-8 border-t-2 border-border">
                  <div className="flex justify-center gap-6">
                    <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                      <Icon name="Mail" size={20} />
                      <span>info@creativestudio.ru</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                      <Icon name="Phone" size={20} />
                      <span>+7 (999) 123-45-67</span>
                    </a>
                  </div>
                  <div className="flex justify-center gap-4 mt-6">
                    <Button variant="outline" size="icon" className="rounded-full border-2">
                      <Icon name="Instagram" size={20} />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full border-2">
                      <Icon name="Facebook" size={20} />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full border-2">
                      <Icon name="Twitter" size={20} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-wider">
            © 2024 Creative Studio. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
