import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  const materials = [
    {
      id: 1,
      title: 'Алгоритмы сортировки',
      category: 'Программирование',
      author: 'Анна Смирнова',
      rating: 4.5,
      downloads: 142,
      type: 'Лабораторная работа',
      description: 'Полное описание алгоритмов быстрой и пузырьковой сортировки с примерами кода'
    },
    {
      id: 2,
      title: 'Квантовая физика: основы',
      category: 'Физика',
      author: 'Дмитрий Петров',
      rating: 5.0,
      downloads: 89,
      type: 'Конспект',
      description: 'Материалы по квантовой механике для студентов 2-го курса'
    },
    {
      id: 3,
      title: 'Анализ баз данных',
      category: 'IT',
      author: 'Елена Кузнецова',
      rating: 4.0,
      downloads: 203,
      type: 'Проект',
      description: 'Проектирование реляционных баз данных на примере библиотечной системы'
    },
    {
      id: 4,
      title: 'Макроэкономика 2024',
      category: 'Экономика',
      author: 'Сергей Иванов',
      rating: 4.8,
      downloads: 156,
      type: 'Презентация',
      description: 'Современные тренды мировой экономики и их влияние на развивающиеся рынки'
    }
  ];

  const categories = [
    { name: 'Программирование', count: 234, color: 'bg-primary' },
    { name: 'Математика', count: 189, color: 'bg-secondary' },
    { name: 'Физика', count: 156, color: 'bg-accent' },
    { name: 'Экономика', count: 142, color: 'bg-destructive' },
    { name: 'IT', count: 198, color: 'bg-primary' },
    { name: 'Химия', count: 87, color: 'bg-secondary' }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Icon
          key={i}
          name={i <= rating ? 'Star' : 'Star'}
          size={16}
          className={i <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
        />
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="GraduationCap" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                StudyShare
              </h1>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {['Главная', 'Материалы', 'Категории', 'Поиск', 'Сообщество', 'FAQ'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveTab(item.toLowerCase())}
                  className={`text-sm font-medium transition-all hover:text-primary relative ${
                    activeTab === item.toLowerCase() ? 'text-primary' : 'text-gray-600'
                  }`}
                >
                  {item}
                  {activeTab === item.toLowerCase() && (
                    <div className="absolute -bottom-5 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
                  )}
                </button>
              ))}
            </div>

            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white">
              <Icon name="User" size={18} className="mr-2" />
              Профиль
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Делись знаниями.<br />Учись вместе.
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Платформа для студентов, где можно обмениваться лабораторными работами, 
            конспектами и учебными материалами
          </p>
          
          {/* Search Bar */}
          <div className="flex gap-3 max-w-2xl mx-auto animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative flex-1">
              <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Найди материалы по любой теме..."
                className="pl-12 h-14 text-lg border-2 border-gray-200 focus:border-primary"
              />
            </div>
            <Button size="lg" className="h-14 px-8 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white">
              <Icon name="Search" size={20} />
            </Button>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-8 mt-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">2,500+</div>
              <div className="text-sm text-gray-600">Материалов</div>
            </div>
            <div className="w-px bg-gray-300" />
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">1,200+</div>
              <div className="text-sm text-gray-600">Студентов</div>
            </div>
            <div className="w-px bg-gray-300" />
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">50+</div>
              <div className="text-sm text-gray-600">Категорий</div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="container mx-auto px-6 py-12">
        <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <Icon name="FolderOpen" size={32} className="text-primary" />
          Популярные категории
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, idx) => (
            <Card
              key={cat.name}
              className="hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-12 h-12 ${cat.color} rounded-xl mx-auto mb-3 flex items-center justify-center`}>
                  <Icon name="BookOpen" size={24} className="text-white" />
                </div>
                <div className="font-semibold mb-1">{cat.name}</div>
                <div className="text-sm text-gray-500">{cat.count} работ</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Materials Grid */}
      <section className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-3xl font-bold flex items-center gap-3">
            <Icon name="TrendingUp" size={32} className="text-secondary" />
            Популярные материалы
          </h3>
          <Button variant="outline" className="border-2">
            Смотреть все
            <Icon name="ArrowRight" size={18} className="ml-2" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {materials.map((material, idx) => (
            <Card
              key={material.id}
              className="hover:shadow-2xl transition-all duration-300 cursor-pointer group animate-fade-in"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20">
                      {material.category}
                    </Badge>
                    <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {material.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">{material.description}</p>
                  </div>
                  <div className="ml-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Icon name="FileText" size={24} className="text-white" />
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-1">
                    {renderStars(material.rating)}
                  </div>
                  <span className="text-sm font-medium">{material.rating}</span>
                  <div className="flex items-center gap-1 text-gray-500">
                    <Icon name="Download" size={16} />
                    <span className="text-sm">{material.downloads}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                      <Icon name="User" size={16} className="text-white" />
                    </div>
                    <span className="text-sm text-gray-600">{material.author}</span>
                  </div>
                  <Button size="sm" className="bg-gradient-to-r from-secondary to-primary hover:opacity-90 text-white">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-16 mb-12">
        <Card className="bg-gradient-to-br from-primary via-secondary to-accent text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24" />
          
          <CardContent className="p-12 relative z-10">
            <div className="max-w-2xl">
              <h3 className="text-4xl font-bold mb-4">Поделись своими материалами</h3>
              <p className="text-xl mb-8 text-white/90">
                Загружай лабораторные работы, конспекты и проекты. 
                Помоги другим студентам учиться эффективнее!
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Icon name="Upload" size={20} className="mr-2" />
                Загрузить материал
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="GraduationCap" size={20} className="text-white" />
                </div>
                <span className="font-bold text-xl">StudyShare</span>
              </div>
              <p className="text-gray-400 text-sm">
                Платформа для обмена знаниями между студентами
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Материалы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Категории</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Сообщество</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Помощь</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Правила</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-3">
                <Button size="sm" variant="outline" className="border-gray-700 hover:bg-primary hover:border-primary">
                  <Icon name="MessageCircle" size={18} />
                </Button>
                <Button size="sm" variant="outline" className="border-gray-700 hover:bg-primary hover:border-primary">
                  <Icon name="Mail" size={18} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            © 2024 StudyShare. Создано студентами для студентов ❤️
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;