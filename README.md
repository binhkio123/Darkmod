# Darkmod ~v0.0.1
# Darkmod ~v0.0.2 (update)
During the current COVID-19 pandemic, researchers have attempted
to estimate the number of cases that are not being reported using
antibody tests [5]. This number is useful as it dictates the number of susceptible individuals, which in turn affects the long-term
dynamics of the epidemic.
We take a data-driven approach to model the existence of unreported cases in terms of probability of a case being reported. Due
to a long period of social distancing, the infection dynamics are
‘stable’,i.e, the parameters that drive the number of cases can be
assumed to be constant over the period. This is unlike the earlier
phase when the world had just started taking precautions during
which a single model with fixed parameters would not have been
able to explain the trends. Using the data from this “stable” phase
(see Figure 1) of social distancing phase and before the precautions
are reduced, we may be able to observe the effect of unreported
cases. We demonstrate that the probability of reporting can be reliably obtained only from certain parts of the time-series. This in
turn provides an estimated upper bound on the number of total
actual cases as a factor of number of reported cases. Particularly, we
prove that the probability of reporting has a negligible effect on the
trend of reported cases in the initial part of the epidemic. Therefore,
arXiv:2006.02127v5 [q-bio.PE] 9 Jul 2020
during that period, we cannot reliably learn the reporting probability. On the other hand, we also prove that learned probability is not
reliable using only the later phase of the epidemic. Thus, there is a
certain time interval over which the learned bound on reporting
probability is reliable. We leverage the fact that reporting probability has negligible effect on the initial part of the timeseries and
significant impact in the later part to construct an algorithm termed
Fixed Infection Rate method. Our method can guarantee that the
obtained upper bound is close to the true upper-bound. We also propose two heuristics that attempt to learn this upper-bound without
any guarantee. While we can also attempt to identify this bound
without relying on a ‘stable’ phase using adaptive models [12], it
will introduce more hyperparameters making our estimation less
reliable.
We are learning a lower bound on reporting probability (and
correspondingly, upper bound on the actual cases) because we can
only measure the combined effect of probability of reporting and
complete isolation (see Section 3.1). This complete isolation is different from reducing social interactions. Reduced social interactions
reduces the probability of a randomly selected infected person affecting a randomly selected susceptible person. On the other hand,
complete isolation implies that a part of the population is removed
and does not participate in the epidemic, effectively reducing the
population by a constant factor. Since this factor is not known, we
can only obtain a lower bound on reporting probability or an upper
bound on the total cases as a factor of reported cases.
