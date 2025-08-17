import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { ScrollArea } from "@/components/ui/scroll-area";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [activeSection, setActiveSection] = useState("dashboard");

  const handleLogin = () => {
    if (username === "Finn_Maestrovich" && password === "29092011") {
      setIsLoggedIn(true);
      setLoginError("");
    } else {
      setLoginError("Неверный логин или пароль");
    }
  };

  const forumStats = {
    totalUsers: 15432,
    onlineUsers: 127,
    totalPosts: 89234,
    totalThreads: 12456,
    todayRegistrations: 23,
    todayPosts: 445
  };

  const recentUsers = [
    { name: "Phoenix_Rider", role: "Администратор", lastSeen: "В сети", status: "online" },
    { name: "Viper_Snake", role: "Модератор", lastSeen: "5 мин назад", status: "away" },
    { name: "Shadow_Walker", role: "Игрок", lastSeen: "15 мин назад", status: "offline" },
    { name: "Angel_Wings", role: "VIP", lastSeen: "1 час назад", status: "offline" }
  ];

  const recentReports = [
    { id: 1, type: "Спам", reporter: "UserReport1", target: "SpamBot", status: "Новый" },
    { id: 2, type: "Оскорбления", reporter: "UserReport2", target: "ToxicUser", status: "В работе" },
    { id: 3, type: "Читы", reporter: "UserReport3", target: "Cheater123", status: "Решено" }
  ];

  const forumThreads = [
    { id: 1, title: "Новое обновление сервера v2.5", author: "Phoenix_Admin", replies: 45, views: 1203, lastPost: "2 мин назад" },
    { id: 2, title: "Правила ролевой игры", author: "Moderator_Team", replies: 12, views: 856, lastPost: "15 мин назад" },
    { id: 3, title: "Набор в полицейский департамент", author: "ChiefPolice", replies: 28, views: 734, lastPost: "1 час назад" },
    { id: 4, title: "Жалоба на читера", author: "ReportUser", replies: 3, views: 156, lastPost: "2 часа назад" }
  ];

  const sidebarMenuItems = [
    { id: "dashboard", icon: "BarChart3", label: "Дашборд", count: null },
    { id: "users", icon: "Users", label: "Пользователи", count: forumStats.totalUsers },
    { id: "forum", icon: "MessageSquare", label: "Форум", count: forumStats.totalThreads },
    { id: "posts", icon: "FileText", label: "Сообщения", count: forumStats.totalPosts },
    { id: "reports", icon: "AlertTriangle", label: "Жалобы", count: 3 },
    { id: "bans", icon: "Ban", label: "Баны", count: 15 },
    { id: "settings", icon: "Settings", label: "Настройки", count: null },
    { id: "logs", icon: "FileSearch", label: "Логи", count: null }
  ];

  const handleDeleteThread = (threadId: number) => {
    if (confirm("Вы уверены, что хотите удалить эту тему?")) {
      console.log(`Удаление темы ${threadId}`);
    }
  };

  const handleDeletePost = (postId: number) => {
    if (confirm("Вы уверены, что хотите удалить это сообщение?")) {
      console.log(`Удаление сообщения ${postId}`);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-4 animate-phoenix-glow">
              <Icon name="Shield" size={32} className="text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl">Админ-панель</CardTitle>
            <CardDescription>Phoenix Mobile RP - Панель управления</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Никнейм</Label>
              <Input
                id="username"
                placeholder="Введите никнейм"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Пароль</Label>
              <Input
                id="password"
                type="password"
                placeholder="Введите пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              />
            </div>
            {loginError && (
              <div className="text-destructive text-sm text-center">{loginError}</div>
            )}
            <Button className="w-full phoenix-glow" onClick={handleLogin}>
              <Icon name="LogIn" size={16} className="mr-2" />
              Войти в панель
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const renderContent = () => {
    switch(activeSection) {
      case "dashboard":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Всего пользователей</CardTitle>
                  <Icon name="Users" size={16} className="text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{forumStats.totalUsers.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">+{forumStats.todayRegistrations} за сегодня</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Онлайн сейчас</CardTitle>
                  <Icon name="Activity" size={16} className="text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-500">{forumStats.onlineUsers}</div>
                  <p className="text-xs text-muted-foreground">Пиковый онлайн: 245</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Всего сообщений</CardTitle>
                  <Icon name="MessageCircle" size={16} className="text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{forumStats.totalPosts.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">+{forumStats.todayPosts} за сегодня</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Всего тем</CardTitle>
                  <Icon name="FileText" size={16} className="text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{forumStats.totalThreads.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">+12 за сегодня</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Последние пользователи</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentUsers.map((user, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback className="text-xs">{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-sm">{user.name}</p>
                            <p className="text-xs text-muted-foreground">{user.role}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-muted-foreground">{user.lastSeen}</span>
                          <div className={`w-2 h-2 rounded-full ${
                            user.status === 'online' ? 'bg-green-500' : 
                            user.status === 'away' ? 'bg-yellow-500' : 'bg-gray-500'
                          }`}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Последние жалобы</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentReports.map((report) => (
                      <div key={report.id} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                        <div>
                          <p className="font-medium text-sm">{report.type}</p>
                          <p className="text-xs text-muted-foreground">{report.reporter} → {report.target}</p>
                        </div>
                        <Badge variant={report.status === "Новый" ? "destructive" : report.status === "В работе" ? "default" : "secondary"}>
                          {report.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case "forum":
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Управление темами форума</CardTitle>
                <CardDescription>Модерация и удаление тем</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {forumThreads.map((thread) => (
                    <div key={thread.id} className="flex items-center justify-between p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors">
                      <div className="flex-1">
                        <h4 className="font-medium">{thread.title}</h4>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                          <span>Автор: {thread.author}</span>
                          <span>Ответов: {thread.replies}</span>
                          <span>Просмотров: {thread.views}</span>
                          <span>Последний пост: {thread.lastPost}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Icon name="Edit" size={14} className="mr-1" />
                          Редактировать
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="Lock" size={14} className="mr-1" />
                          Закрыть
                        </Button>
                        <Button 
                          variant="destructive" 
                          size="sm" 
                          onClick={() => handleDeleteThread(thread.id)}
                        >
                          <Icon name="Trash2" size={14} className="mr-1" />
                          Удалить
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "posts":
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Управление сообщениями</CardTitle>
                <CardDescription>Модерация и удаление сообщений</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((postId) => (
                    <div key={postId} className="p-4 bg-muted/20 rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback>U{postId}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-sm">User_{postId}</p>
                            <p className="text-xs text-muted-foreground">{postId} часа назад</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Icon name="Edit" size={14} className="mr-1" />
                            Редактировать
                          </Button>
                          <Button 
                            variant="destructive" 
                            size="sm" 
                            onClick={() => handleDeletePost(postId)}
                          >
                            <Icon name="Trash2" size={14} className="mr-1" />
                            Удалить
                          </Button>
                        </div>
                      </div>
                      <p className="text-sm">Это пример сообщения №{postId} от пользователя. Здесь может быть любой контент, который требует модерации.</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "users":
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Управление пользователями</CardTitle>
                <CardDescription>Поиск и управление аккаунтами игроков</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex space-x-2">
                  <Input placeholder="Поиск по никнейму..." className="flex-1" />
                  <Button><Icon name="Search" size={16} /></Button>
                </div>
                <div className="space-y-2">
                  {recentUsers.map((user, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Avatar><AvatarFallback>{user.name.slice(0, 2).toUpperCase()}</AvatarFallback></Avatar>
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-muted-foreground">{user.role}</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Icon name="Edit" size={14} className="mr-1" />Редактировать
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="Ban" size={14} className="mr-1" />Забанить
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return <div className="text-center text-muted-foreground">Выберите раздел из меню</div>;
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* XenForo Style Sidebar */}
      <div className="w-64 bg-card border-r border-border flex flex-col">
        {/* Sidebar Header */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Shield" size={20} className="text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-bold text-lg">Admin Panel</h1>
              <p className="text-xs text-muted-foreground">Phoenix Mobile RP</p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <ScrollArea className="flex-1 p-2">
          <div className="space-y-1">
            {sidebarMenuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                  activeSection === item.id 
                    ? 'bg-primary text-primary-foreground' 
                    : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon name={item.icon as any} size={16} />
                  <span>{item.label}</span>
                </div>
                {item.count && (
                  <Badge variant="secondary" className="text-xs">
                    {item.count > 999 ? `${Math.floor(item.count / 1000)}k` : item.count}
                  </Badge>
                )}
              </button>
            ))}
          </div>
        </ScrollArea>

        {/* User Info */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center space-x-3">
            <Avatar className="w-8 h-8">
              <AvatarFallback className="bg-primary text-primary-foreground text-xs">FM</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Finn_Maestrovich</p>
              <p className="text-xs text-muted-foreground">Главный админ</p>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setIsLoggedIn(false)}>
              <Icon name="LogOut" size={14} />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="bg-card border-b border-border p-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold capitalize">
                {sidebarMenuItems.find(item => item.id === activeSection)?.label || 'Панель управления'}
              </h2>
              <p className="text-sm text-muted-foreground">Phoenix Mobile RP Admin Panel</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="Bell" size={16} className="mr-2" />
                Уведомления
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="RefreshCw" size={16} className="mr-2" />
                Обновить
              </Button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Index;