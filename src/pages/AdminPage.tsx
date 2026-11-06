import React, { useState } from 'react';
import {
  Lock,
  Eye,
  EyeOff,
  LogOut,
  Plus,
  Trash2,
  ExternalLink,
  Menu as MenuIcon,
  ChevronLeft,
  ChevronRight,
  UtensilsCrossed,
  Sparkles,
  Flame,
  CheckCircle2,
  AlertCircle,
  Search,
  RotateCcw,
} from 'lucide-react';
import { useMenu } from '../contexts/MenuContext';
import { navigateTo } from '../utils/navigation';
import type { MenuItem, MenuTab } from '../types';

const ADMIN_PASSWORD = '271302';
const AUTH_STORAGE_KEY = 'dpn_admin_auth';

export default function AdminPage() {
  const { menuItems, addMenuItem, deleteMenuItem, resetMenu } = useMenu();

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem(AUTH_STORAGE_KEY) === 'true';
  });
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState('');

  // Dashboard Sidebar State
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Form State
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTabFilter, setSelectedTabFilter] = useState<string>('all');

  // Form Fields
  const [nameEn, setNameEn] = useState('');
  const [nameId, setNameId] = useState('');
  const [price, setPrice] = useState<number | ''>('');
  const [descEn, setDescEn] = useState('');
  const [descId, setDescId] = useState('');
  const [spice, setSpice] = useState<0 | 1 | 2 | 3>(1);
  const [selectedTabs, setSelectedTabs] = useState<MenuTab[]>(['mains']);
  const [imageUrl, setImageUrl] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput.trim() === ADMIN_PASSWORD) {
      sessionStorage.setItem(AUTH_STORAGE_KEY, 'true');
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Incorrect access password. Please try again.');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
    setIsAuthenticated(false);
    setPasswordInput('');
  };

  const toggleTabSelection = (tab: MenuTab) => {
    if (selectedTabs.includes(tab)) {
      if (selectedTabs.length > 1) {
        setSelectedTabs(selectedTabs.filter((t) => t !== tab));
      }
    } else {
      setSelectedTabs([...selectedTabs, tab]);
    }
  };

  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameEn.trim() || !price || Number(price) <= 0) {
      alert('Please provide a dish name and valid price.');
      return;
    }

    const newItem: MenuItem = {
      id: `dish-${Date.now()}`,
      nameEn: nameEn.trim(),
      nameId: nameId.trim() || nameEn.trim(),
      descEn: descEn.trim(),
      descId: descId.trim() || descEn.trim(),
      price: Number(price),
      spice,
      allergens: [],
      tabs: selectedTabs,
      image: imageUrl.trim() || undefined,
    };

    addMenuItem(newItem);

    // Reset Form
    setNameEn('');
    setNameId('');
    setPrice('');
    setDescEn('');
    setDescId('');
    setImageUrl('');
    setSpice(1);
    setSelectedTabs(['mains']);
    setShowAddForm(false);
    setFormSuccess(`"${newItem.nameEn}" successfully added to the live menu!`);
    setTimeout(() => setFormSuccess(''), 4000);
  };

  // Filtered menu items for table
  const filteredItems = menuItems.filter((item) => {
    const matchesSearch =
      item.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.nameId.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab =
      selectedTabFilter === 'all' || item.tabs.includes(selectedTabFilter as MenuTab);
    return matchesSearch && matchesTab;
  });

  const bestSellerCount = menuItems.filter((item) => item.tabs.includes('bestseller')).length;

  // ----------------------------------------------------
  // 1. Password Protection Gate Screen (Identical Branding)
  // ----------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-bark-950 text-cream-50 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Ambient lighting glows */}
        <div
          className="absolute -top-40 -left-40 w-96 h-96 pointer-events-none rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(212,160,23,0.18) 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-96 h-96 pointer-events-none rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(192,57,43,0.22) 0%, transparent 70%)' }}
        />

        <div className="w-full max-w-md bg-bark-900/90 border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl relative z-10 backdrop-blur-md">
          {/* Brand Logo Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 rounded-full border-2 border-gold-400/40 p-1 bg-bark-950/80 shadow-xl shadow-black/40 mx-auto mb-4 flex items-center justify-center">
              <img
                src="/Logo/Logo.jpg"
                alt="Dapur Pusaka Nusantara Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="font-serif text-2xl font-bold block text-white">Dapur Pusaka</span>
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-gold-300 block mb-3">
              Nusantara
            </span>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cream-300">
              Staff & Owner Portal
            </span>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-bark-300 mb-2">
                Access Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Enter 6-digit access code"
                  className="w-full bg-bark-950/80 border border-white/15 focus:border-gold-400 text-cream-50 text-sm px-4 py-3.5 rounded-xl outline-none transition-colors pr-12 font-mono"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-bark-400 hover:text-cream-100 transition-colors p-1"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {authError && (
              <div className="flex items-center gap-2 text-xs text-chili-400 bg-chili-950/40 border border-chili-800/40 p-3 rounded-xl animate-fade-in">
                <AlertCircle size={15} className="shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-chili-600 hover:bg-chili-500 active:bg-chili-700 text-white font-bold text-sm py-3.5 rounded-xl transition-all shadow-lg shadow-chili-950/40 hover:-translate-y-px"
            >
              Unlock Dashboard
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <button
              onClick={() => navigateTo('/')}
              className="text-xs text-bark-400 hover:text-gold-300 transition-colors flex items-center justify-center gap-1.5 mx-auto"
            >
              <span>&larr; Return to Restaurant Website</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // 2. Authenticated Admin Dashboard Layout (Collapsible Sidebar)
  // ----------------------------------------------------
  return (
    <div className="min-h-screen bg-bark-950 text-cream-50 flex flex-col md:flex-row antialiased">
      {/* Collapsible Left Sidebar */}
      <aside
        className={`bg-bark-900 border-r border-white/10 transition-all duration-300 flex flex-col z-30 shrink-0 ${
          sidebarOpen ? 'w-full md:w-64' : 'w-full md:w-20'
        }`}
      >
        {/* Sidebar Header */}
        <div className="h-20 px-4 sm:px-5 flex items-center justify-between border-b border-white/10">
          {sidebarOpen ? (
            <div className="flex items-center gap-3">
              <img
                src="/Logo/Logo.jpg"
                alt="Logo"
                className="w-9 h-9 rounded-full object-cover border border-gold-400/35 shrink-0"
              />
              <div className="flex flex-col leading-none">
                <span className="font-serif text-base font-bold text-white">Dapur Pusaka</span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold-300">
                  Admin Portal
                </span>
              </div>
            </div>
          ) : (
            <img
              src="/Logo/Favicon.png"
              alt="Logo Favicon"
              className="w-9 h-9 rounded-full object-cover border border-gold-400/35 mx-auto"
            />
          )}

          <button
            onClick={() => setSidebarOpen((prev) => !prev)}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-bark-300 hover:text-white transition-colors"
            title={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
          >
            {sidebarOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
          </button>
        </div>

        {/* Sidebar Navigation Items */}
        <div className="flex-1 py-6 px-3 space-y-2">
          <button
            className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-semibold transition-colors bg-gold-400/15 text-gold-300 border border-gold-400/30 ${
              !sidebarOpen ? 'justify-center' : ''
            }`}
          >
            <UtensilsCrossed size={19} className="shrink-0 text-gold-400" />
            {sidebarOpen && <span>Product Menu</span>}
          </button>

          <button
            onClick={() => navigateTo('/')}
            className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-semibold transition-colors text-bark-300 hover:text-white hover:bg-white/5 ${
              !sidebarOpen ? 'justify-center' : ''
            }`}
            title="Open Live Website"
          >
            <ExternalLink size={19} className="shrink-0" />
            {sidebarOpen && <span>View Live Site</span>}
          </button>
        </div>

        {/* Sidebar Bottom / Logout */}
        <div className="p-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-chili-400 hover:bg-chili-950/30 transition-colors ${
              !sidebarOpen ? 'justify-center' : ''
            }`}
            title="Log Out"
          >
            <LogOut size={18} className="shrink-0" />
            {sidebarOpen && <span>Exit Admin</span>}
          </button>
        </div>
      </aside>

      {/* Main Content View */}
      <main className="flex-1 min-w-0 p-5 sm:p-8 lg:p-10 overflow-y-auto">
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-white/10 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-bark-400">
                Local Live Sync Active
              </span>
            </div>
            <h1 className="font-serif text-3xl font-bold text-cream-50">Menu Manager</h1>
            <p className="text-sm text-bark-300 mt-1">
              Add and manage dishes shown in the /menu catalog and home Best Sellers section.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowAddForm((prev) => !prev)}
              className="inline-flex items-center gap-2 bg-chili-600 hover:bg-chili-500 active:bg-chili-700 text-white font-bold text-sm px-5 py-3 rounded-xl transition-all shadow-md shadow-chili-950/30 hover:-translate-y-px"
            >
              <Plus size={16} />
              <span>{showAddForm ? 'Close Form' : 'Add New Dish'}</span>
            </button>
          </div>
        </div>

        {/* Success Banner */}
        {formSuccess && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-200 text-sm flex items-center gap-2 animate-fade-in">
            <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
            <span>{formSuccess}</span>
          </div>
        )}

        {/* Quick Stat Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-bark-900 border border-white/10 rounded-2xl p-5">
            <span className="text-xs font-bold uppercase tracking-wider text-bark-400 block mb-1">
              Total Dishes
            </span>
            <span className="font-serif text-3xl font-bold text-white">{menuItems.length}</span>
          </div>
          <div className="bg-bark-900 border border-white/10 rounded-2xl p-5">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-400 block mb-1">
              Best Sellers
            </span>
            <span className="font-serif text-3xl font-bold text-gold-300">{bestSellerCount}</span>
          </div>
          <div className="bg-bark-900 border border-white/10 rounded-2xl p-5">
            <span className="text-xs font-bold uppercase tracking-wider text-bark-400 block mb-1">
              Mains
            </span>
            <span className="font-serif text-3xl font-bold text-white">
              {menuItems.filter((i) => i.tabs.includes('mains')).length}
            </span>
          </div>
          <div className="bg-bark-900 border border-white/10 rounded-2xl p-5">
            <span className="text-xs font-bold uppercase tracking-wider text-bark-400 block mb-1">
              Soups & Veggies
            </span>
            <span className="font-serif text-3xl font-bold text-white">
              {menuItems.filter((i) => i.tabs.includes('soup') || i.tabs.includes('vegetables')).length}
            </span>
          </div>
        </div>

        {/* Add Product Collapsible Panel */}
        {showAddForm && (
          <div className="mb-10 bg-bark-900 border border-gold-400/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative animate-slide-up">
            <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-gold-400 block">
                  New Product Entry
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">Create Menu Dish</h3>
              </div>
              <button
                onClick={() => setShowAddForm(false)}
                className="text-xs text-bark-400 hover:text-white"
              >
                Cancel
              </button>
            </div>

            <form onSubmit={handleCreateProduct} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-bark-300 mb-2">
                    Dish Name (English) *
                  </label>
                  <input
                    type="text"
                    required
                    value={nameEn}
                    onChange={(e) => setNameEn(e.target.value)}
                    placeholder="e.g. Balinese Grilled Snapper"
                    className="w-full bg-bark-950 border border-white/15 focus:border-gold-400 text-white text-sm px-4 py-3 rounded-xl outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-bark-300 mb-2">
                    Dish Name (Indonesian)
                  </label>
                  <input
                    type="text"
                    value={nameId}
                    onChange={(e) => setNameId(e.target.value)}
                    placeholder="e.g. Ikan Bakar Jimbaran"
                    className="w-full bg-bark-950 border border-white/15 focus:border-gold-400 text-white text-sm px-4 py-3 rounded-xl outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-bark-300 mb-2">
                    Price in IDR (Rupiah) *
                  </label>
                  <input
                    type="number"
                    required
                    min={1000}
                    step={1000}
                    value={price}
                    onChange={(e) => setPrice(e.target.value === '' ? '' : Number(e.target.value))}
                    placeholder="e.g. 75000"
                    className="w-full bg-bark-950 border border-white/15 focus:border-gold-400 text-white text-sm px-4 py-3 rounded-xl outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-bark-300 mb-2">
                    Spice Level
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {([0, 1, 2, 3] as const).map((lvl) => (
                      <button
                        key={lvl}
                        type="button"
                        onClick={() => setSpice(lvl)}
                        className={`py-2.5 rounded-xl text-xs font-bold transition-all border ${
                          spice === lvl
                            ? 'bg-chili-600 text-white border-chili-500 shadow-md'
                            : 'bg-bark-950 border-white/10 text-bark-300 hover:text-white'
                        }`}
                      >
                        {lvl === 0 && 'None'}
                        {lvl === 1 && '🌶️ Mild'}
                        {lvl === 2 && '🌶️🌶️ Medium'}
                        {lvl === 3 && '🌶️🌶️🌶️ Hot'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Categories / Tabs */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-bark-300 mb-2">
                  Assign Categories / Sections (Select all that apply)
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {(
                    [
                      { key: 'bestseller', label: '⭐ Best Seller (Featured on Home)' },
                      { key: 'mains', label: 'Mains' },
                      { key: 'soup', label: 'Soup' },
                      { key: 'vegetables', label: 'Vegetables' },
                      { key: 'snacks', label: 'Snacks' },
                      { key: 'drinks', label: 'Drinks' },
                    ] as const
                  ).map(({ key, label }) => {
                    const isSelected = selectedTabs.includes(key);
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => toggleTabSelection(key)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                          isSelected
                            ? key === 'bestseller'
                              ? 'bg-gold-500/20 text-gold-300 border-gold-400'
                              : 'bg-white/15 text-white border-white/40'
                            : 'bg-bark-950 text-bark-400 border-white/10 hover:border-white/20'
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Description */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-bark-300 mb-2">
                    Description (English)
                  </label>
                  <textarea
                    rows={3}
                    value={descEn}
                    onChange={(e) => setDescEn(e.target.value)}
                    placeholder="e.g. Charred snapper fillet with sweet savory Balinese spices and sambal matah."
                    className="w-full bg-bark-950 border border-white/15 focus:border-gold-400 text-white text-sm px-4 py-3 rounded-xl outline-none resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-bark-300 mb-2">
                    Description (Indonesian)
                  </label>
                  <textarea
                    rows={3}
                    value={descId}
                    onChange={(e) => setDescId(e.target.value)}
                    placeholder="e.g. Ikan kakap bakar bumbu khas Jimbaran dengan aroma arang dan sambal matah."
                    className="w-full bg-bark-950 border border-white/15 focus:border-gold-400 text-white text-sm px-4 py-3 rounded-xl outline-none resize-none"
                  />
                </div>
              </div>

              {/* Image URL with live preview */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-bark-300 mb-2">
                  Photo URL (Optional)
                </label>
                <div className="flex gap-4 items-center">
                  <input
                    type="url"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="https://images.unsplash.com/... or /hero-bg.jpg"
                    className="flex-1 bg-bark-950 border border-white/15 focus:border-gold-400 text-white text-sm px-4 py-3 rounded-xl outline-none"
                  />
                  {imageUrl && (
                    <div className="w-14 h-14 rounded-xl overflow-hidden bg-black/40 border border-white/20 shrink-0">
                      <img src={imageUrl} alt="preview" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-5 py-3 rounded-xl text-sm font-semibold text-bark-300 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-chili-600 hover:bg-chili-500 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-md shadow-chili-950/40"
                >
                  Save & Publish to Live Menu
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Existing Products List Table */}
        <div className="bg-bark-900 border border-white/10 rounded-3xl overflow-hidden shadow-xl">
          {/* Table Header Filter Controls */}
          <div className="p-5 sm:p-6 border-b border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-bark-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dishes..."
                className="w-full bg-bark-950 border border-white/10 focus:border-gold-400 text-white text-xs px-10 py-2.5 rounded-xl outline-none"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-hide">
              {['all', 'bestseller', 'mains', 'soup', 'vegetables', 'snacks', 'drinks'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTabFilter(tab)}
                  className={`text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors capitalize ${
                    selectedTabFilter === tab
                      ? 'bg-gold-400/20 text-gold-300 border border-gold-400/30'
                      : 'text-bark-400 hover:text-white'
                  }`}
                >
                  {tab === 'bestseller' ? '⭐ Best Sellers' : tab}
                </button>
              ))}
            </div>
          </div>

          {/* Table Element */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-bark-950/60 text-[11px] font-bold uppercase tracking-wider text-bark-400 border-b border-white/10">
                <tr>
                  <th className="py-3.5 px-5">Dish</th>
                  <th className="py-3.5 px-4">Categories</th>
                  <th className="py-3.5 px-4">Spice</th>
                  <th className="py-3.5 px-4">Price</th>
                  <th className="py-3.5 px-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredItems.map((item) => (
                  <tr key={item.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-5">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-bark-950 overflow-hidden border border-white/10 shrink-0">
                          <img
                            src={
                              item.image ||
                              'https://images.unsplash.com/photo-1569058242252-623df46b5025?auto=format&fit=crop&w=200&q=80'
                            }
                            alt={item.nameEn}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <span className="font-bold text-white block leading-snug">{item.nameEn}</span>
                          <span className="text-xs text-bark-400 block">{item.nameId}</span>
                        </div>
                      </div>
                    </td>

                    <td className="py-4 px-4">
                      <div className="flex flex-wrap gap-1">
                        {item.tabs.map((t) => (
                          <span
                            key={t}
                            className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                              t === 'bestseller'
                                ? 'bg-gold-500/20 text-gold-300 border border-gold-400/30'
                                : 'bg-white/5 text-bark-300'
                            }`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </td>

                    <td className="py-4 px-4 text-xs font-bold text-bark-300">
                      {item.spice === 0 && <span className="text-bark-500">—</span>}
                      {item.spice === 1 && <span className="text-amber-400">🌶️ Mild</span>}
                      {item.spice === 2 && <span className="text-orange-400">🌶️🌶️ Med</span>}
                      {item.spice === 3 && <span className="text-chili-400">🌶️🌶️🌶️ Hot</span>}
                    </td>

                    <td className="py-4 px-4 font-mono font-bold text-gold-300">
                      Rp {item.price.toLocaleString('id-ID')}
                    </td>

                    <td className="py-4 px-5 text-right">
                      <button
                        onClick={() => {
                          if (confirm(`Remove "${item.nameEn}" from live menu?`)) {
                            deleteMenuItem(item.id);
                          }
                        }}
                        className="p-2 rounded-lg text-bark-400 hover:text-chili-400 hover:bg-chili-950/20 transition-colors"
                        title="Delete Dish"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}

                {filteredItems.length === 0 && (
                  <tr>
                    <td colSpan={5} className="py-12 text-center text-bark-400">
                      No dishes found matching your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Table Footer Reset */}
          <div className="p-4 bg-bark-950/40 border-t border-white/10 flex items-center justify-between text-xs text-bark-400">
            <span>Showing {filteredItems.length} of {menuItems.length} menu items</span>
            <button
              onClick={() => {
                if (confirm('Reset menu back to default factory items? This will clear custom items.')) {
                  resetMenu();
                }
              }}
              className="inline-flex items-center gap-1.5 text-bark-400 hover:text-gold-300 transition-colors"
            >
              <RotateCcw size={13} />
              <span>Reset to Defaults</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

