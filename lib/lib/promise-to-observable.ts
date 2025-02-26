import { Observable } from "zen-observable-ts"

export interface PromiseState<T> {
  loading: boolean
  error: Error | null
  data: T | null
}

export function promiseToObservable<T>(
  promise: Promise<T>
): Observable<PromiseState<T>> {
  return new Observable((observer) => {
    // Initial loading state
    observer.next({
      loading: true,
      error: null,
      data: null,
    })

    promise
      .then((data) => {
        observer.next({
          loading: false,
          error: null,
          data,
        })
        observer.complete()
      })
      .catch((error) => {
        observer.next({
          loading: false,
          error,
          data: null,
        })
        observer.complete()
      })

    // Cleanup function
    return () => {
      // No cleanup needed for promises
    }
  })
}

export function observableToPromiseState<T>(
  source: Observable<T>
): Observable<PromiseState<T>> {
  return new Observable((observer) => {
    observer.next({
      loading: true,
      error: null,
      data: null,
    })

    return source.subscribe({
      next: (data) => {
        observer.next({
          loading: false,
          error: null,
          data,
        })
        observer.complete()
      },
      error: (error) => {
        observer.next({
          loading: false,
          error,
          data: null,
        })
        observer.complete()
      },
      complete: () => {
        observer.complete()
      },
    })
  })
}
