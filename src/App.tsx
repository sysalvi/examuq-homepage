import React from 'react';
import { Download, Command, LayoutGrid, Smartphone, Info, ArrowRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] font-sans selection:bg-[#E2E8F0]">
      <div className="w-full max-w-[1100px] mx-auto flex flex-col flex-grow justify-center px-6 md:px-0 py-[40px]">
        
        {/* Header */}
        <header className="w-full flex items-center justify-between mb:[24px] md:mb-[0px] md:absolute md:top-8 md:left-0 md:px-8">
          <div className="flex items-center gap-2 font-[700] text-[18px] tracking-tight">
            <img 
              src="/logo-02.png" 
              alt="ExamUQ Logo" 
              className="w-[36px] h-[36px] object-contain"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.style.display = 'none';
                if (e.currentTarget.nextElementSibling) {
                  (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                }
              }}
            />
            <div className="w-[32px] h-[32px] rounded-[8px] bg-[#9A275A] text-[#FFFFFF] hidden items-center justify-center font-bold text-sm">
              UQ
            </div>
            <span className="text-[#0F172A]">ExamUQ Client</span>
          </div>
        </header>

        <main className="w-full flex flex-col">
          {/* Hero Section */}
          <section className="text-center mb-[40px] pt-8 md:pt-0">
            <div className="inline-flex items-center gap-2 px-[8px] py-[2px] bg-[#E2E8F0] rounded-[4px] text-[11px] font-[600] text-[#0F172A] mb-[12px] uppercase tracking-[0.05em]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F36E22]"></span>
              </span>
              Versi Terbaru v0.1.6
            </div>
            
            <h1 className="text-[32px] md:text-[42px] font-[800] tracking-[-0.025em] text-[#0F172A] mb-[12px] leading-tight">
              Download <span className="text-[#9A275A]">ExamUQ Client</span>
            </h1>
            <p className="text-[16px] md:text-[18px] text-[#475569] max-w-2xl mx-auto mb-[32px] leading-normal">
              Unduh aplikasi resmi ExamUQ Client untuk mengikuti ujian dengan aman dan lancar.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-[16px]">
              <a 
                href="https://raw.githubusercontent.com/sysalvi/examuq/main/download/examuq-0.1.6-android.apk" 
                className="group inline-flex items-center justify-center px-[28px] py-[14px] rounded-[8px] text-[16px] font-[600] no-underline transition-colors border border-transparent bg-[#10B981] text-[#FFFFFF] shadow-[0_4px_6px_-1px_rgba(16,185,129,0.3)] hover:bg-[#059669] w-full sm:w-auto"
              >
                <Smartphone className="w-[20px] h-[20px] opacity-80 mr-[10px]" />
                <div className="text-left flex-grow">
                  <div className="text-[12px] opacity-80 mb-[2px] font-normal tracking-wide">Download untuk</div>
                  <div className="leading-none">Android</div>
                </div>
                <ArrowRight className="w-4 h-4 ml-[8px] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-transform" />
              </a>

              <a 
                href="https://raw.githubusercontent.com/sysalvi/examuq/e8df0f8e66ae4484ee69b928f3883b9af66868c2/download/examuq-0.1.6-macos.dmg"
                className="group inline-flex items-center justify-center px-[28px] py-[14px] rounded-[8px] text-[16px] font-[600] no-underline transition-colors border border-transparent bg-[#9A275A] text-[#FFFFFF] shadow-[0_4px_6px_-1px_rgba(154,39,90,0.3)] hover:bg-[#801f4a] w-full sm:w-auto"
              >
                <Command className="w-[20px] h-[20px] opacity-80 mr-[10px]" />
                <div className="text-left flex-grow">
                  <div className="text-[12px] opacity-80 mb-[2px] font-normal tracking-wide">Download untuk</div>
                  <div className="leading-none">macOS</div>
                </div>
                <ArrowRight className="w-4 h-4 ml-[8px] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-transform" />
              </a>

              <a 
                href="https://raw.githubusercontent.com/sysalvi/examuq/main/download/examuq-0.1.6-windows-portable.exe" 
                className="group inline-flex items-center justify-center px-[28px] py-[14px] rounded-[8px] text-[16px] font-[600] no-underline transition-colors border border-transparent bg-[#F36E22] text-[#FFFFFF] shadow-[0_4px_6px_-1px_rgba(243,110,34,0.3)] hover:bg-[#ea580c] w-full sm:w-auto"
              >
                <LayoutGrid className="w-[20px] h-[20px] opacity-80 mr-[10px]" />
                <div className="text-left flex-grow">
                  <div className="text-[12px] opacity-80 mb-[2px] font-normal tracking-wide">Download untuk</div>
                  <div className="leading-none">Windows</div>
                </div>
                <ArrowRight className="w-4 h-4 ml-[8px] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-transform" />
              </a>
            </div>
          </section>

          {/* Installation Instructions */}
          <section className="w-full mb-[40px]">
            <h2 className="sr-only">
              Cara Install
            </h2>
            
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[24px]">
              {/* Android Card */}
              <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-[12px] p-[28px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-2px_rgba(0,0,0,0.05)]">
                <div className="flex items-center gap-[12px] mb-[20px] border-b border-[#E2E8F0] pb-[12px]">
                  <h3 className="text-[18px] font-[700] uppercase tracking-[0.05em] text-[#0F172A] flex items-center gap-[8px]">
                    <Smartphone className="w-5 h-5 text-[#10B981] opacity-90" />
                    Panduan Android
                  </h3>
                </div>
                
                <ul className="list-none space-y-[12px]">
                  {[
                    "Unduh file APK menggunakan tombol di atas.",
                    "Buka file APK dan izinkan opsi 'Instal dari Sumber Tidak Dikenal' jika diminta.",
                    "Berikan izin 'App Pinning' (Penyematan Layar) agar sesi ujian aman dari gangguan.",
                    "Nonaktifkan fitur Optimasi Baterai dan izinkan aplikasi tetap berjalan di latar belakang.",
                    "Buka aplikasi dan ikuti petunjuk pengawas untuk memulai ujian."
                  ].map((step, idx) => (
                    <li key={idx} className="flex gap-[12px] text-[14px] leading-[1.5] text-[#475569]">
                      <div className="flex-shrink-0 w-[22px] h-[22px] bg-[#ECFDF5] border border-[#10B981]/20 text-[#10B981] rounded-[50%] flex items-center justify-center text-[12px] font-[700]">
                        {idx + 1}
                      </div>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* macOS Card */}
              <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-[12px] p-[28px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-2px_rgba(0,0,0,0.05)]">
                <div className="flex items-center gap-[12px] mb-[20px] border-b border-[#E2E8F0] pb-[12px]">
                  <h3 className="text-[18px] font-[700] uppercase tracking-[0.05em] text-[#0F172A] flex items-center gap-[8px]">
                    <Command className="w-5 h-5 opacity-70" />
                    Panduan macOS
                  </h3>
                </div>
                
                <ul className="list-none space-y-[12px]">
                  {[
                    "Download file aplikasi menggunakan tombol di atas (.dmg).",
                    "Buka file hasil download untuk memproses disk image.",
                    "Langsung jalankan aplikasi dari dalam DMG (tidak perlu dipindah ke Applications).",
                    "Jika muncul peringatan keamanan, klik kanan > Open pada aplikasi.",
                    "Masukkan kode ujian sesuai petunjuk pengawas."
                  ].map((step, idx) => (
                    <li key={idx} className="flex gap-[12px] text-[14px] leading-[1.5] text-[#475569]">
                      <div className="flex-shrink-0 w-[22px] h-[22px] bg-[#FDFCFF] border border-[#9A275A]/20 text-[#9A275A] rounded-[50%] flex items-center justify-center text-[12px] font-[700]">
                        {idx + 1}
                      </div>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Windows Card */}
              <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-[12px] p-[28px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-2px_rgba(0,0,0,0.05)]">
                <div className="flex items-center gap-[12px] mb-[20px] border-b border-[#E2E8F0] pb-[12px]">
                  <h3 className="text-[18px] font-[700] uppercase tracking-[0.05em] text-[#0F172A] flex items-center gap-[8px]">
                    <LayoutGrid className="w-5 h-5 text-[#F36E22] opacity-90" />
                    Panduan Windows
                  </h3>
                </div>
                
                <ul className="list-none space-y-[12px]">
                  {[
                    "Download aplikasi Windows melalui tombol di atas (.exe).",
                    "Aplikasi bersifat portabel, sehingga tidak perlu proses instalasi.",
                    "Langsung jalankan file .exe yang telah selesai diunduh.",
                    "Jika muncul SmartScreen, pilih 'More Info' lalu 'Run Anyway'.",
                    "Masukkan kode ujian sesuai petunjuk pengawas."
                  ].map((step, idx) => (
                    <li key={idx} className="flex gap-[12px] text-[14px] leading-[1.5] text-[#475569]">
                      <div className="flex-shrink-0 w-[22px] h-[22px] bg-[#FFF8F5] border border-[#F36E22]/20 text-[#F36E22] rounded-[50%] flex items-center justify-center text-[12px] font-[700]">
                        {idx + 1}
                      </div>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ / Notes */}
          <section className="w-full text-center border-t border-[#E2E8F0] pt-[24px] text-[#475569]">
            <div className="flex flex-col items-center gap-[8px] mx-auto">
              <Info className="w-[20px] h-[20px] text-[#475569] opacity-70 mb-[4px]" />
              <div className="space-y-[4px]">
                <p className="text-[13px] text-[#475569]">Hubungi tim IT jika ada kendala.</p>
                <p className="text-[13px] font-[500] opacity-80 text-[#475569] tracking-wide">Pastikan Anda selalu mengunduh aplikasi dari tautan resmi sekolah.</p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="w-full text-center text-[#475569] mt-8">
          <p className="text-[12px] opacity-70">&copy; {new Date().getFullYear()} ExamUQ by DISTEK-YUQD | Ummu'l Quro Depok</p>
        </footer>
      </div>
    </div>
  );
}
