/* ==========================================
   ANT HUMAN SERVICES - INTERACTIVE JAVASCRIPT
   Recruitment | Staffing | Workforce Solutions
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. SAMPLE JOB DATA ---
    const jobsData = [
        {
            id: 1,
            title: "FDMS & Computer Operator",
            company: "Premier Auto Dealership",
            category: "auto",
            badgeClass: "badge-white",
            badgeText: "White-Collar",
            location: "Varanasi, UP",
            type: "Full-Time",
            salary: "₹18,000 - ₹24,000 / mo",
            experience: "1-3 Years",
            description: "Field Data Management System (FDMS) operator required for vehicle inventory & billing management."
        },
        {
            id: 2,
            title: "Territory Sales Manager",
            company: "FMCG Distribution Network",
            category: "sales",
            badgeClass: "badge-white",
            badgeText: "White-Collar",
            location: "Varanasi / Eastern UP",
            type: "Full-Time",
            salary: "₹35,000 - ₹50,000 / mo",
            experience: "3-5 Years",
            description: "Manage channel partner sales, territory distribution, and field sales executive teams."
        },
        {
            id: 3,
            title: "Industrial Machine Operator",
            company: "Surya Manufacturing Works",
            category: "blue-collar",
            badgeClass: "badge-blue",
            badgeText: "Blue-Collar",
            location: "Varanasi Industrial Zone",
            type: "Contract",
            salary: "₹16,000 - ₹22,000 / mo",
            experience: "1+ Year",
            description: "CNC/Lathe machine operators for manufacturing plant shift operations. ESI & EPF benefits included."
        },
        {
            id: 4,
            title: "Accounts & Tally Executive",
            company: "Apex Trade Enterprises",
            category: "white-collar",
            badgeClass: "badge-white",
            badgeText: "White-Collar",
            location: "Lucknow, UP",
            type: "Full-Time",
            salary: "₹22,000 - ₹30,000 / mo",
            experience: "2-4 Years",
            description: "GST invoicing, Tally Prime accounting, bank reconciliation, and vendor ledger management."
        },
        {
            id: 5,
            title: "Retail Store Supervisor",
            company: "National Retail Chain",
            category: "sales",
            badgeClass: "badge-contract",
            badgeText: "Staffing Contract",
            location: "Varanasi Mall",
            type: "Full-Time",
            salary: "₹20,000 - ₹26,000 / mo",
            experience: "2+ Years",
            description: "Oversee floor sales staff, stock audit, customer service, and daily cash counter reconciliation."
        },
        {
            id: 6,
            title: "Assembly Line Worker (Contract)",
            company: "Auto Ancillary Plant",
            category: "blue-collar",
            badgeClass: "badge-contract",
            badgeText: "Mass Hiring",
            location: "Noida / NCR",
            type: "Contract",
            salary: "₹15,000 - ₹19,000 / mo",
            experience: "Fresher / Skilled",
            description: "Contract workforce placement for automated assembly line component fitting."
        }
    ];

    // --- 2. RENDER JOBS & FILTERING ---
    const jobsContainer = document.getElementById('jobsContainer');
    const filterPills = document.querySelectorAll('.filter-pill');

    function renderJobs(filter = 'all', keyword = '') {
        if (!jobsContainer) return;
        jobsContainer.innerHTML = '';

        const filtered = jobsData.filter(job => {
            const matchesCategory = filter === 'all' || job.category === filter;
            const matchesSearch = !keyword || 
                job.title.toLowerCase().includes(keyword.toLowerCase()) || 
                job.description.toLowerCase().includes(keyword.toLowerCase()) ||
                job.location.toLowerCase().includes(keyword.toLowerCase());
            return matchesCategory && matchesSearch;
        });

        if (filtered.length === 0) {
            jobsContainer.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: #64748B;">
                    <i class="fa-solid fa-folder-open" style="font-size: 3rem; margin-bottom: 1rem; color: #CBD5E1;"></i>
                    <h3>No Matching Positions Found</h3>
                    <p>Try clearing your search terms or drop your resume for future opportunities!</p>
                </div>
            `;
            return;
        }

        filtered.forEach(job => {
            const card = document.createElement('div');
            card.className = 'job-card';
            card.innerHTML = `
                <span class="job-badge ${job.badgeClass}">${job.badgeText}</span>
                <h3>${job.title}</h3>
                <div class="job-meta">
                    <span><i class="fa-solid fa-building"></i> ${job.company}</span>
                    <span><i class="fa-solid fa-location-dot"></i> ${job.location}</span>
                </div>
                <p class="job-details">${job.description}</p>
                <div class="job-footer">
                    <span class="job-salary">${job.salary}</span>
                    <button class="btn btn-emerald btn-sm btn-apply-job" data-id="${job.id}">
                        Apply Now <i class="fa-solid fa-paper-plane"></i>
                    </button>
                </div>
            `;
            jobsContainer.appendChild(card);
        });

        // Attach Apply Click Handlers
        document.querySelectorAll('.btn-apply-job').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const jobId = parseInt(e.currentTarget.getAttribute('data-id'));
                openJobModal(jobId);
            });
        });
    }

    // Category Filter Pills Listener
    filterPills.forEach(pill => {
        pill.addEventListener('click', () => {
            filterPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            const category = pill.getAttribute('data-filter');
            renderJobs(category);
        });
    });

    // Hero Search Form Listener
    const heroSearchForm = document.getElementById('heroSearchForm');
    if (heroSearchForm) {
        heroSearchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const keyword = document.getElementById('searchKeyword').value;
            const category = document.getElementById('searchCategory').value;
            
            // Scroll to jobs section
            document.getElementById('jobs').scrollIntoView({ behavior: 'smooth' });
            
            // Filter
            const targetFilter = category === 'all' ? 'all' : category;
            renderJobs(targetFilter, keyword);
        });
    }

    // Initial Job Render
    renderJobs();

    // --- 3. EMPLOYER WIZARD CALCULATOR ---
    const wizCount = document.getElementById('wizCount');
    const wizCountVal = document.getElementById('wizCountVal');
    const wizCategory = document.getElementById('wizCategory');
    const resTime = document.getElementById('resTime');
    const resCandidates = document.getElementById('resCandidates');
    const resGuarantee = document.getElementById('resGuarantee');

    function updateWizardEstimate() {
        if (!wizCount) return;
        const count = parseInt(wizCount.value);
        wizCountVal.textContent = `${count} ${count === 1 ? 'Position' : 'Positions'}`;

        const urgency = document.querySelector('input[name="urgency"]:checked')?.value || 'urgent';

        let days = "48 Hours";
        if (urgency === 'urgent') days = count > 20 ? "3-5 Days" : "24-48 Hours";
        else if (urgency === 'standard') days = "5-7 Days";
        else days = "10-14 Days";

        resTime.textContent = days;
        resCandidates.textContent = `${Math.floor(count * 3.5)} Verified Profiles`;
        resGuarantee.textContent = count > 10 ? "180-Day Guarantee" : "90-Day Free Replacement";
    }

    if (wizCount) {
        wizCount.addEventListener('input', updateWizardEstimate);
        wizCategory.addEventListener('change', updateWizardEstimate);
        document.querySelectorAll('input[name="urgency"]').forEach(r => r.addEventListener('change', updateWizardEstimate));
        
        // Radio button visual styling
        document.querySelectorAll('.radio-btn').forEach(label => {
            label.addEventListener('click', () => {
                document.querySelectorAll('.radio-btn').forEach(l => l.classList.remove('active'));
                label.classList.add('active');
            });
        });
    }

    const btnRequestWizardEstimate = document.getElementById('btnRequestWizardEstimate');
    if (btnRequestWizardEstimate) {
        btnRequestWizardEstimate.addEventListener('click', () => {
            openEmployerModal("Custom Staffing Order (" + wizCount.value + " Positions)");
        });
    }

    // --- 4. SALARY BENCHMARK TOOL ---
    const salRole = document.getElementById('salRole');
    const salExp = document.getElementById('salExp');
    const salOutput = document.getElementById('salOutput');

    const salaryData = {
        'fdms': { entry: '₹14,000 - ₹18,000', mid: '₹18,000 - ₹25,000', senior: '₹25,000 - ₹35,000' },
        'sales-exec': { entry: '₹16,000 - ₹22,000', mid: '₹22,000 - ₹32,000', senior: '₹35,000 - ₹50,000' },
        'territory-mgr': { entry: '₹28,000 - ₹38,000', mid: '₹38,000 - ₹55,000', senior: '₹60,000 - ₹85,000' },
        'accountant': { entry: '₹15,000 - ₹20,000', mid: '₹22,000 - ₹30,000', senior: '₹35,000 - ₹45,000' },
        'machine-op': { entry: '₹12,000 - ₹16,000', mid: '₹16,000 - ₹22,000', senior: '₹24,000 - ₹32,000' },
        'store-manager': { entry: '₹18,000 - ₹24,000', mid: '₹25,000 - ₹35,000', senior: '₹38,000 - ₹55,000' },
        'hr-exec': { entry: '₹18,000 - ₹25,000', mid: '₹25,000 - ₹38,000', senior: '₹40,000 - ₹65,000' }
    };

    function updateSalaryBenchmark() {
        if (!salRole || !salExp || !salOutput) return;
        const role = salRole.value;
        const exp = salExp.value;
        const range = salaryData[role]?.[exp] || '₹18,000 - ₹28,000';
        salOutput.innerHTML = `${range} <span class="per-month">/ month</span>`;
    }

    if (salRole && salExp) {
        salRole.addEventListener('change', updateSalaryBenchmark);
        salExp.addEventListener('change', updateSalaryBenchmark);
    }

    // --- 5. MODAL HANDLERS ---
    const jobModal = document.getElementById('jobModal');
    const employerModal = document.getElementById('employerModal');

    function openJobModal(jobId) {
        const job = jobsData.find(j => j.id === jobId) || jobsData[0];
        document.getElementById('modalJobTitle').textContent = `Apply for ${job.title}`;
        document.getElementById('modalJobTag').textContent = job.badgeText;
        document.getElementById('modalJobCompany').innerHTML = `<i class="fa-solid fa-building"></i> ${job.company} &bull; <i class="fa-solid fa-location-dot"></i> ${job.location}`;
        document.getElementById('modalJobId').value = job.id;
        
        jobModal.classList.add('active');
    }

    function openEmployerModal(serviceName = "General Staffing") {
        const empServiceNeeded = document.getElementById('empServiceNeeded');
        if (empServiceNeeded && serviceName) {
            for (let opt of empServiceNeeded.options) {
                if (opt.value === serviceName || opt.text.includes(serviceName)) {
                    opt.selected = true;
                    break;
                }
            }
        }
        employerModal.classList.add('active');
    }

    // Close Modals
    document.getElementById('closeJobModal')?.addEventListener('click', () => jobModal.classList.remove('active'));
    document.getElementById('closeEmployerModal')?.addEventListener('click', () => employerModal.classList.remove('active'));

    window.addEventListener('click', (e) => {
        if (e.target === jobModal) jobModal.classList.remove('active');
        if (e.target === employerModal) employerModal.classList.remove('active');
    });

    // Attach Open Buttons
    document.getElementById('btnUploadResumeNav')?.addEventListener('click', () => openJobModal(1));
    document.getElementById('btnHeroCandidate')?.addEventListener('click', () => openJobModal(1));
    document.getElementById('btnPostJobNav')?.addEventListener('click', () => openEmployerModal());
    document.getElementById('btnHeroEmployer')?.addEventListener('click', () => openEmployerModal());

    document.querySelectorAll('.open-employer-modal').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const service = e.currentTarget.getAttribute('data-service');
            openEmployerModal(service);
        });
    });

    // --- 6. DRAG & DROP RESUME SIMULATION ---
    const fileDropArea = document.getElementById('fileDropArea');
    const resumeFileInput = document.getElementById('resumeFileInput');
    const fileNameDisplay = document.getElementById('fileNameDisplay');

    if (fileDropArea && resumeFileInput) {
        fileDropArea.addEventListener('click', () => resumeFileInput.click());
        
        resumeFileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                fileNameDisplay.innerHTML = `<i class="fa-solid fa-file-pdf text-emerald"></i> Selected: <strong>${e.target.files[0].name}</strong>`;
            }
        });

        fileDropArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            fileDropArea.style.borderColor = 'var(--color-emerald)';
            fileDropArea.style.background = 'var(--color-emerald-light)';
        });

        fileDropArea.addEventListener('dragleave', () => {
            fileDropArea.style.borderColor = 'var(--color-border)';
            fileDropArea.style.background = 'var(--color-bg-light)';
        });

        fileDropArea.addEventListener('drop', (e) => {
            e.preventDefault();
            if (e.dataTransfer.files.length > 0) {
                resumeFileInput.files = e.dataTransfer.files;
                fileNameDisplay.innerHTML = `<i class="fa-solid fa-file-pdf text-emerald"></i> Selected: <strong>${e.dataTransfer.files[0].name}</strong>`;
            }
        });
    }

    // --- 7. FORM SUBMISSIONS WITH TOAST ALERTS ---
    function showToast(message, type = 'success') {
        const toastContainer = document.getElementById('toastContainer');
        if (!toastContainer) return;

        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `
            <i class="fa-solid fa-circle-check text-emerald" style="font-size: 1.25rem;"></i>
            <div>${message}</div>
        `;
        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 300);
        }, 4000);
    }

    document.getElementById('jobApplicationForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        jobModal.classList.remove('active');
        showToast("Application submitted successfully! Our recruitment manager in Varanasi will contact you shortly.");
        e.target.reset();
        if (fileNameDisplay) fileNameDisplay.innerHTML = `Drag & drop your resume or <strong>Click to Browse</strong>`;
    });

    document.getElementById('employerRequestForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        employerModal.classList.remove('active');
        showToast("Staffing request received! An ANT Account Manager will reach out within 2 hours.");
        e.target.reset();
    });

    document.getElementById('mainContactForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast("Thank you for reaching out! Your message has been sent to ANT Human Services.");
        e.target.reset();
    });

    // --- 8. FAQ ACCORDION ---
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            const isActive = item.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });

    // --- 9. ANIMATED COUNTER NUMBERS ---
    const impactNumbers = document.querySelectorAll('.impact-number');
    let animated = false;

    function animateCounters() {
        if (animated) return;
        const impactSection = document.querySelector('.impact-bar');
        if (!impactSection) return;

        const rect = impactSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            animated = true;
            impactNumbers.forEach(num => {
                const target = parseInt(num.getAttribute('data-target'));
                let current = 0;
                const increment = Math.ceil(target / 40);
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        num.textContent = target.toLocaleString() + "+";
                        clearInterval(timer);
                    } else {
                        num.textContent = current.toLocaleString();
                    }
                }, 30);
            });
        }
    }

    window.addEventListener('scroll', animateCounters);
    animateCounters(); // Initial check

    // --- 10. MOBILE NAV TOGGLE ---
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileToggle.querySelector('i').classList.toggle('fa-xmark');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileToggle.querySelector('i').classList.remove('fa-xmark');
            });
        });
    }
});
